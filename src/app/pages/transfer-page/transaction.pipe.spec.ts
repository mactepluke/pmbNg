import { TransactionPipe } from './transaction.pipe';

describe('MePipe', () => {
  it('create an instance', () => {
    const pipe = new TransactionPipe();
    expect(pipe).toBeTruthy();
  });
});
