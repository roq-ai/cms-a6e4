const mapping: Record<string, string> = {
  blogs: 'blog',
  features: 'feature',
  organizations: 'organization',
  posts: 'post',
  services: 'service',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
