const testWait = async () => {
  const args = process.argv.slice(2);
  console.dir(args, { depth: null });

  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("hello world");
};
const testFetch = async () => {
  const r = await fetch("https://jsonplaceholder.typicode.com/posts/1")
  const json = await r.json();  
  console.dir(json, { depth: null });
};

const toRun = { 
  testWait, testFetch 
};
const run = async () => {
  const args = process.argv.slice(2);
  const f = toRun[args[0]];
  if (f) {
    await f();
  }
};
run().catch((e) => {
  console.error(e);
  process.exit(1);
});
