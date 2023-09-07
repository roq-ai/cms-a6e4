interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Customer'],
  tenantRoles: ['Administrator', 'Content Manager', 'Editor'],
  tenantName: 'Organization',
  applicationName: 'CMS',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    "View the organization's profile, posts, blogs, contact information, services, and features",
    'Search for specific posts, blogs, services, and features',
  ],
  ownerAbilities: [
    "Manage organization's profile",
    'Invite Content Managers and Editors',
    'Manage services and features',
    "Manage organization's users",
    "Manage organization's settings",
  ],
};
