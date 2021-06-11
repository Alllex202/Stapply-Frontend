const domain = 'http://localhost:8080/';

export const UrlsApi = {
  TrackedApps: domain + 'api/apps',
  Search: domain + 'api/search',
  AddTrackedApp: domain + 'api/apps/add',
  RemoveTrackedApp: domain + 'api/search',
  Login: domain + 'api/auth/login',
  Register: domain + 'api/auth/register',
  GetCurrentUser: domain + 'api/users/current',
};
