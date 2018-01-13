import Styles from '../assets/index';

import AppConfig from './app.config';
import AppRun from './app.run';
import AppRoute from './app.route';
import AppComponent from './app.component';
import AppDependency from './app.dependency';
import AppShared from './shared/shared.module';

import RepoListPageComponent from './repo-list/repo-list.component';
import HomePageComponent from './home/home.component';
import RepoDetailsPageComponent from './repo-details/repo-details.component';

export default angular.module('app', [
    AppDependency,
    AppRun,
    AppRoute,
    AppConfig,
    AppComponent,
    AppShared,
    HomePageComponent,
    RepoListPageComponent,
    RepoDetailsPageComponent
])
    .name;