class UsersModel {
    /* @ngInject */
    constructor($resource) {
        this.Users = $resource('https://api.github.com/users/:userId/:custom',
            {
                userId: '@userId',
                custom: '@custom'
            },
            {
                getUserById: {method: 'GET'},
                getUserRepositories: {method: 'GET', isArray:true, params: {custom: 'repos'}}
            }
        );
    }
}

export default angular.module('app.home.user.model', [])
    .service('usersModel', UsersModel)
    .name;