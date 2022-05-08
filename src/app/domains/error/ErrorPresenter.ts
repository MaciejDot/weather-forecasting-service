export default function ErrorPresenter() {
  return {
    getLinkHref, getLinkMessage, getMessage, getTitle,
  };
  function getTitle() {
    return '404';
  }
  function getMessage() {
    return 'Page not found';
  }
  function getLinkMessage() {
    return 'Go to home page';
  }
  function getLinkHref() {
    return '/';
  }
}
