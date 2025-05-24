function getHost() {
  return process.argv.includes('--host')
    ? process.argv[process.argv.indexOf('--host') + 1]
    : 'localhost';
}

const host = getHost();
console.log(`Development server would start here (host: ${host})`);
// Keep the process running
process.stdin.resume();
