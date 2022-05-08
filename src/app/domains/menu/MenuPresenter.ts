export default function MenuPresenter() {
  return { mainLinkHref, mainLinkLabel };

  function mainLinkLabel() {
    return 'Weather forecast';
  }

  function mainLinkHref() {
    return '/';
  }
}
