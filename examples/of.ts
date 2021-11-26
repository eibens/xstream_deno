import xs from "../mod.ts";

const stream = xs.of(10, 20, 30, 40, 41, 42);

stream.addListener({
  next: (x) => console.log(x),
  error: (err) => console.error(err),
  complete: () => console.log("done"),
});
