import { Transaction } from './transaction';

describe('Connection', () => {
  it('should create an instance', () => {
    expect(new Transaction()).toBeTruthy();
  });
});
