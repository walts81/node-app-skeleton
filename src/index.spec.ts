import 'mocha';
import { expect } from 'chai';
import { counter } from './counter';
import { main } from './index';

describe('Index', () => {
  it('should increment counter when index is run', () => {
    expect(counter.value).to.eq(1);
    main();
    expect(counter.value).to.eq(2);
  });
});
