import { getByRole } from '@testing-library/react';

export default function MenuTestApi(container : HTMLElement) {
  return {
    expectHeading,
  };
  function expectHeading({ name, href } : {name:string, href:string}) {
    const header = getByRole(container, 'banner');
    const link = getByRole(header, 'link');
    expect(header).toHaveTextContent(name);
    expect(link).toHaveAttribute('href', href);
  }
}
