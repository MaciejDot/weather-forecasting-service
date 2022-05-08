export default function stubNavigator() {
  const nav = {
    ...window.navigator,
    geolocation: { getCurrentPosition: () => {} },
    language: 'en-US',
  };
  // @ts-ignore
  Object.defineProperty(window, 'navigator', { value: nav });
}
