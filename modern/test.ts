const testWait = async () => {
  const args = process.argv.slice(2); 
  console.dir(args, { depth: null });
  
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("hello world");
};

const toRun = {
  testWait,
}
const run = async () => {
  const args = process.argv.slice(2);
  const k = args[0];
  const f = toRun[k];  
  if (f) {
    await f();
  }
};
run().catch((e) => {
  console.error(e);
  process.exit(1);
});
