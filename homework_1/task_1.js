process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
      process.stdout.write(`${String(chunk).trimRight().split('').reverse().join('')}\n\n\n`);
    }
});