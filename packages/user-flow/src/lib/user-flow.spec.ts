import { userFlow } from './user-flow';

describe('userFlow', () => {
  it('should work', async () => {
    expect(await userFlow()).toEqual('user-flow');
  }, 50_000);
});
