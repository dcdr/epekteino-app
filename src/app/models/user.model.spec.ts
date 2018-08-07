import { User } from './user.model';

describe('User', () => {
  let sut: User;
  let familyName = 'Nichols';
  let givenName = 'Nick';
  let roles = ['protagonist'];
  let permissions = [ 'rock:*', 'hardplace:between' ];

  beforeEach(() => {
    sut = new User(familyName, givenName, roles, permissions);
  });

  describe('displayName()', () => {
    it('should have displayName', () => {
      expect(sut.displayName()).toBe('Nick Nichols');
    });
  })

  describe('hasRole()', () => {
    it('should be "protagonist"', () => {
      expect(sut.hasRole('protagonist')).toBeTruthy();
    });

    it('should be ["protagonist"]', () => {
      expect(sut.hasRole(['protagonist'])).toBeTruthy();
    });

    it('should not be ["antagonist"]', () => {
      expect(sut.hasRole(['antagonist'])).toBeFalsy();
    })
  });

  describe('hasPermission()', () => {
    it('should have "rock:*"', () => {
      expect(sut.hasPermission('rock:*')).toBeTruthy();
    });

    it('should not have "pebbles:get"', () => {
      expect(sut.hasPermission('pebbles:get')).toBeFalsy();
    })

    it('should have ["rock:*"]', () => {
      expect(sut.hasPermission(['rock:*'])).toBeTruthy();
    });

    it('should not have ["pebbles:get"]', () => {
      expect(sut.hasPermission(['pebbles:get'])).toBeFalsy();
    })

    it('should have ["rock:get", "rock:update", "hardplace:between"]', () => {
      expect(sut.hasPermission(['rock:get', 'rock:update', 'hardplace:between'])).toBeTruthy();
    });

    it('should not have ["hardplace:under"]', () => {
      expect(sut.hasPermission(['hardplace:under'])).toBeFalsy();
    })

    it('should not have ["hardplace:*"]', () => {
      expect(sut.hasPermission(['hardplace:*'])).toBeFalsy();
    })
  });
});
