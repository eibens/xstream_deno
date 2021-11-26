import xs from "../mod.ts";

const stream = xs.periodic(1000)
  .take(10)
  .filter((i) => i % 2 === 0)
  .map((i) => i * i);

function listenerNext(x: unknown) {
  console.log(x);
}

stream.addListener({
  next: listenerNext,
  error: (err) => console.error(err),
  complete: () => console.log("done"),
});
