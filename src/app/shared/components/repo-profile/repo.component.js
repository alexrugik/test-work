import RepoProfileTemplate from './repo.template.html';

class RepoProfileController {
    /* @ngInject */
    constructor() {
    }

    $onInit() {
    }

    $onChanges(changes) {
        if (changes && changes.repo && !changes.repo.isFirstChange()) {
            this.repo = angular.copy(changes.repo.currentValue);
        }
    }

    parseDate(date) {
        return new Date(date).toGMTString();
    }
}

export default angular.module('app.shared.components.repo-profile', [])
    .component('appRepoProfile', {
        template: RepoProfileTemplate,
        controller: RepoProfileController,
        controllerAs: '$ctrl',
        bindings: {
            repo: '<',
            onUpdateRepo: '&'
        }
    })
    .name;