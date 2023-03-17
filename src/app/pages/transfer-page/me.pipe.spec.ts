import { MePipe } from './me.pipe';

describe('MePipe', () => {
  it('create an instance', () => {
    const pipe = new MePipe();
    expect(pipe).toBeTruthy();
  });
});
