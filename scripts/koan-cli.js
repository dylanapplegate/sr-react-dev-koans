// @ts-check
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ANSI color codes for terminal formatting
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
};

/**
 * The main function to run the koan CLI
 */
function runKoanCLI() {
  const args = process.argv.slice(2); // Get command line arguments
  
  // Check if a koan ID was provided
  if (args.length === 0) {
    printUsage();
    return;
  }
  
  const koanId = args[0]; // Get the koan ID from arguments
  
  try {
    // Find the koan directory
    const koanDir = findKoanDirectory(koanId);
    
    // Display the koan content
    displayKoanContent(koanDir);
    
    // Display instructions for the user
    displayUserInstructions(koanDir, koanId);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`${colors.red}${colors.bright}Error: ${error.message}${colors.reset}`);
    } else {
      console.error(`${colors.red}${colors.bright}An unknown error occurred${colors.reset}`);
    }
    process.exit(1);
  }
}

/**
 * Print usage instructions for the koan CLI
 */
function printUsage() {
  console.log(`
${colors.bright}${colors.yellow}ninja-koans CLI${colors.reset}

${colors.bright}Usage:${colors.reset}
  npm run koan <KOAN_ID>

${colors.bright}Example:${colors.reset}
  npm run koan KOAN-REACT-001

${colors.bright}Description:${colors.reset}
  This command displays the content of the specified koan and 
  provides instructions for working with it.
  `);
}

/**
 * Find the directory containing the specified koan
 */
function findKoanDirectory(koanId) {
  const srcDir = path.join(process.cwd(), 'src');
  const koansDir = path.join(srcDir, 'koans');
  
  // Check if the koans directory exists
  if (!fs.existsSync(koansDir)) {
    throw new Error(`Koans directory not found at ${koansDir}. Make sure the project structure is correct.`);
  }
  
  // Look for directories that start with the given koanId
  const koanDirs = fs.readdirSync(koansDir)
    .filter(dir => fs.statSync(path.join(koansDir, dir)).isDirectory())
    .filter(dir => dir.startsWith(koanId));
  
  if (koanDirs.length === 0) {
    throw new Error(`No koan found with ID ${koanId}. Available koans are: ${listAvailableKoans(koansDir)}`);
  }
  
  if (koanDirs.length > 1) {
    throw new Error(`Multiple koans found with ID ${koanId}: ${koanDirs.join(', ')}. Please specify a more precise ID.`);
  }
  
  return path.join(koansDir, koanDirs[0]);
}

/**
 * List available koans for user reference
 */
function listAvailableKoans(koansDir) {
  try {
    const koanDirs = fs.readdirSync(koansDir)
      .filter(dir => fs.statSync(path.join(koansDir, dir)).isDirectory());
    
    return koanDirs.length > 0 ? koanDirs.join(', ') : 'No koans found';
  } catch (error) {
    return 'Unable to list available koans';
  }
}

/**
 * Display the content of the KOAN.md file
 */
function displayKoanContent(koanDir) {
  const koanFilePath = path.join(koanDir, 'KOAN.md');
  
  if (!fs.existsSync(koanFilePath)) {
    throw new Error(`KOAN.md file not found in ${koanDir}`);
  }
  
  const koanContent = fs.readFileSync(koanFilePath, 'utf-8');
  
  console.log(`\n${colors.cyan}${colors.bright}${'='.repeat(60)}${colors.reset}`);
  console.log(`${colors.cyan}${colors.bright}KOAN CHALLENGE${colors.reset}`);
  console.log(`${colors.cyan}${colors.bright}${'='.repeat(60)}${colors.reset}\n`);
  
  // Display the koan content
  console.log(koanContent);
}

/**
 * Display instructions for the user on how to proceed
 */
function displayUserInstructions(koanDir, koanId) {
  const indexPath = path.join(koanDir, 'index.tsx');
  const testPath = path.join(koanDir, '__tests__/index.test.tsx');
  const solutionPath = path.join(koanDir, 'solution.tsx');
  
  console.log(`\n${colors.green}${colors.bright}${'='.repeat(60)}${colors.reset}`);
  console.log(`${colors.green}${colors.bright}INSTRUCTIONS${colors.reset}`);
  console.log(`${colors.green}${colors.bright}${'='.repeat(60)}${colors.reset}\n`);
  
  console.log(`${colors.bright}1. Edit your solution:${colors.reset}`);
  console.log(`   Open and modify: ${colors.yellow}${indexPath}${colors.reset}\n`);
  
  console.log(`${colors.bright}2. Run tests to verify your solution:${colors.reset}`);
  console.log(`   ${colors.yellow}npm test ${testPath}${colors.reset}\n`);
  
  if (fs.existsSync(solutionPath)) {
    console.log(`${colors.bright}3. If needed, review the reference solution:${colors.reset}`);
    console.log(`   ${colors.yellow}${solutionPath}${colors.reset}\n`);
  }
  
  console.log(`${colors.blue}${colors.bright}Happy coding! May the React wisdom guide your path.${colors.reset}\n`);
}

// Run the CLI
runKoanCLI();