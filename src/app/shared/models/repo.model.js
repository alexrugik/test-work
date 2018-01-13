class RepoModel {
    /* @ngInject */
    constructor($resource) {
        this.Repo = $resource('https://api.github.com/repos/:owner/:repo',
            {
                owner: '@owner',
                repo: '@repo'
            },
            {
                getRepo: {method: 'GET'},
            }
        );
    }
}

export default angular.module('app.home.repo.model', [])
    .service('repoModel', RepoModel)
    .name;