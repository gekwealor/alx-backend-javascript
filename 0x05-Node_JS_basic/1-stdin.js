/**
* Prints messages stdout
* Reads stdin and displays message as name
* Closes function
*/
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const message = process.stdin.read();

  if (message) {
    process.stdout.write(`Your name is: ${message}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
