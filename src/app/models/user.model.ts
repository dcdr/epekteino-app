export class User {
  constructor(private familyName: string, private givenName: string, private roles: string[], private permissions: string[]) {
  }

  displayName() {
    return this.givenName + ' ' + this.familyName;
  }

  hasRole(roles: string | string[]) {
    if (typeof roles === 'string') {
      roles = [ roles ];
    }

    return roles.every((role) => {
      return -1 !== this.roles.indexOf(role);
    });
  }

  hasPermission(permissions: string | string[]) {
    if (typeof permissions === 'string') {
      permissions = [ permissions ];
    }

    return permissions.every((perm) => {
      let [requestResource, requestAction] = perm.split(':');
      return this.permissions.some((perm) => {
        let [myResource, myAction] = perm.split(':');
        return myResource === requestResource && (myAction === '*' || myAction === requestAction);
      });
    })
  }
}