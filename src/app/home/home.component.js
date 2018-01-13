import HomePageTemplate from './home.template.html';
import {DATA_STATE} from "../app.const";


class HomePageController {
    /* @ngInject */
    constructor(usersModel) {
        this.Users = usersModel.Users;
    }

    $onInit() {
        this.dataState = DATA_STATE.EMPTY;
    }

    onSearchUser(userId) {
        if (userId === void 0 || userId.length < 1) {
            return;
        }
        this.dataState = DATA_STATE.LOADING;
        this.Users.getUserById({userId})
            .$promise
            .then(data => {
                this.user = data;
                this.dataState = DATA_STATE.LOADED;
                console.log(data);
            })
            .catch(error => {
                this.dataState = DATA_STATE.ERROR;
                console.warn(error);
            });
    }
}

export default angular.module('app.home-page', [])
    .component('appHomePage', {
        template: HomePageTemplate,
        controller: HomePageController,
        controllerAs: '$ctrl',
        bindings: {}
    })
    .name;