console.log(`Development server would start here (host: ${process.argv.includes('--host') ? process.argv[process.argv.indexOf('--host') + 1] : 'localhost'})`);
// Keep the process running
setInterval(() => {}, 3600000);