import { ComponentLoader } from 'adminjs';

const componentLoader = new ComponentLoader();

export const Components = {
  RoleLabel: componentLoader.add(
    'RoleLabel',
    '../components/role-label/role-label'
  ),
  Login: componentLoader.override('Login', '../components/login/login'),
  Sidebar: componentLoader.override('Sidebar', '../components/sidebar/sidebar'),
  Dashboard: componentLoader.add(
    'Dashboard',
    '../components/dashboard/dashboard'
  ),
  UploadField: componentLoader.add(
    'UploadField',
    '../components/upload-field/upload-field'
  ),
  UploadMultipleField: componentLoader.add(
    'UploadMultipleField',
    '../components/upload-field/upload-multiple-field'
  ),
};
export default componentLoader;
