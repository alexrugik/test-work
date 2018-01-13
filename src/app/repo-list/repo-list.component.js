import RepoListTemplate from './repo-list.template.html';
import {DATA_STATE} from "../app.const";

class RepoListController {
    /* @ngInject */
    constructor($stateParams, usersModel) {
        this.userId = $stateParams.userId;
        this.Users = usersModel.Users;
    }

    $onInit() {
        this.setRepos();
    }

    setRepos() {
        this.dataState = DATA_STATE.LOADING;
        this.Users.getUserRepositories({userId: this.userId})
            .$promise
            .then(data => {
                this.repos = data;
                this.dataState = DATA_STATE.LOADED;
            })
            .catch(error => {
                this.dataState = DATA_STATE.ERROR;
                console.warn(error);
            });
        return this;
    }
}


export default angular.module('app.repo-list.component', [])
    .component('appRepoList', {
        template: RepoListTemplate,
        controller: RepoListController,
        controllerAs: '$ctrl',
        bindings: {}
    })
    .name;