const testWait = async () => {
  const args = process.argv.slice(2);
  console.dir(args, { depth: null });

  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("hello world");
};
const testFetch = async () => {
  const r = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const json = await r.json();
  console.dir(json, { depth: null });
};

const run = async (toRun:{[x: string]:any}) => {
  const args = process.argv.slice(2);
  const f = toRun[args[0]];
  if (f) {
    try {
      await f();
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }
};
run({
  testWait, testFetch,
});
