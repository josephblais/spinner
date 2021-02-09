let input = ['\r|   ', '\r|   ', '\r/   ','\r-   ','\r\\   ','\r/   ','\r-   ','\r\\   ','\r/   '];
let time = 100;


for (let string of input) {
  setTimeout(() => {
    process.stdout.write(string);
  }, time);
  time += 200;
}