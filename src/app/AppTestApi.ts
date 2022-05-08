import { getByRole } from '@testing-library/react';
import MenuTestApi from './components/menu/MenuTestApi';

export default function AppTestApi(container : HTMLElement) {
  return {
    getMenu,
  };
  function getMenu() {
    return MenuTestApi(getByRole(container, 'navigation'));
  }
}
