import { counter } from './counter';

const main = () => {
  counter.value += 1;
  console.log(counter);
};

main();

export { main };
