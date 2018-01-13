import RepoDetailsTemplate from './repo-details.template.html';
import {DATA_STATE} from "../app.const";

class RepoDetailsController {
    /* @ngInject */
    constructor($stateParams, repoModel) {
        this.Repo = repoModel.Repo;
        this.ownerId = angular.copy($stateParams.ownerId);
        this.repoId = angular.copy($stateParams.repoId);
    }

    $onInit() {
        this.setRepo();
    }

    setRepo() {
        this.dataState = DATA_STATE.LOADING;
        this.Repo.getRepo({owner: this.ownerId, repo: this.repoId})
            .$promise
            .then(data => {
                this.dataState = DATA_STATE.LOADED;
                this.repo = data;
                console.log(data);
            })
            .catch(error => {
                this.dataState = DATA_STATE.ERROR;
                console.warn(error);
            });
        return this;
    }
}


export default angular.module('app.repo-details.component', [])
    .component('appRepoDetails', {
        template: RepoDetailsTemplate,
        controller: RepoDetailsController,
        controllerAs: '$ctrl',
        bindings: {}
    })
    .name;