import 'mocha';
import { expect } from 'chai';
import { main } from './index';

describe('Index', () => {
  it('should increment counter when index is run', () => {
    expect(main.counter.value).to.eq(1);
    main.run();
    expect(main.counter.value).to.eq(2);
  });
});
