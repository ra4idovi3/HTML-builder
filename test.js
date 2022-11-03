const { stdin, stdout, exit } = process;

const flag = process.argv.slice(2)[0];

const checkArgs = flag == "-f" || flag == "-d" ? true : false;

console.log(checkArgs);

if (checkArgs) {
  const answer = flag == "-f" ? __filename : __dirname;
  stdout.write(answer);
} else {
  console.log("Please, type a correct flag after filename. (-f)(-d)");
}
