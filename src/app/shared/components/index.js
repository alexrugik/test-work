import Header from './header/header.component';
import UserProfile from './user-profile/user-profile.component';
import RepoProfile from './repo-profile/repo.component';

export default angular.module('app.shared.components', [
    Header,
    UserProfile,
    RepoProfile
])
    .name;