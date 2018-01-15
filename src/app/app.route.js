import {APP_ROUTES} from './app.const';

export default angular.module('app.route', [])
    .config(appRoute)
    .name;

/* @ngInject */
function appRoute($stateProvider) {
    $stateProvider
        .state('app', {
            abstract: true,
            url: '',
            views: {
                header: {template: '<app-header></app-header>'},
                main: {template: '<app-main>'}
            }
        })
        .state(APP_ROUTES.HOME, {
            url: '/home',
            template: '<app-home-page></app-home-page>'
        })
        .state(APP_ROUTES.REPO_LIST, {
            url: '/repo-list/{userId}',
            template: '<app-repo-list></app-repo-list>'
        })
        .state(APP_ROUTES.REPO_DETAILS, {
            url: '/repo-profile/{ownerId}/{repoId}',
            template: '<app-repo-details></app-repo-details>'
        })
}