import { TGitHubUser } from 'types';

// перевіряє чи є поле 'айді' в типі
export const isGitHubUser = (user: any): user is TGitHubUser => 'id' in user;
