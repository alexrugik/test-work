import UsersModel from './users.model';
import RepoModel from './repo.model';

export default angular.module('app.shared.models', [
    UsersModel,
    RepoModel
])
    .name;
