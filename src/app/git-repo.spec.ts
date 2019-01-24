import { GitRepo } from './git-repo';

describe('GitRepo', () => {
  it('should create an instance', () => {
    expect(new GitRepo()).toBeTruthy();
  });
});
