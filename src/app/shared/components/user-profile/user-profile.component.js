import UserProfileTemplate from './user-profile.template.html';
import UserStyles from './user-profile.styles.css';

class UserProfileController {
    /* @ngInject */
    constructor() {
    }

    $onInit() {
    }

    $onChanges(changes) {
        if (changes && changes.user && !changes.user.isFirstChange()) {
            this.user = angular.copy(changes.user.currentValue);
        }
    }

    parseDate(date) {
        return new Date(date).toGMTString();
    }

}

export default angular.module('app.shared.components.user-profile', [])
    .component('appUserProfile', {
        template: UserProfileTemplate,
        controller: UserProfileController,
        controllerAs: '$ctrl',
        bindings: {
            user: '<',
            onUpdateUser: '&'
        }
    })
    .name;