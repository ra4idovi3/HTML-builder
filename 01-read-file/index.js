const path = require("path");
const fs = require("fs");
const { Stream } = require("stream");
const { json } = require("stream/consumers");
const filePath = path.join(__dirname, "text.txt");
const { stdout } = process;
const stream = new fs.ReadStream(filePath);

stream.on("readable", () => {
  let chunk = stream.read();
  if (chunk != null) {
    stdout.write(chunk);
  }
});
