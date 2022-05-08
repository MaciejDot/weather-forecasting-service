export default function FooterPresenter() {
  return {
    getAuthor,
    getLinkedinHref,
    getGithubHref,
    getOpenWeatherHref,
    getOpenWeatherLink,
    getOpenWeatherDescription,
  };

  function getAuthor() {
    return 'Author: Maciej Dziąg';
  }
  function getLinkedinHref() {
    return 'https://www.linkedin.com/in/maciej-dzi%C4%85g-bba1aa162/';
  }
  function getGithubHref() {
    return 'https://github.com/MaciejDot/weather-forecasting-service';
  }
  function getOpenWeatherHref() {
    return 'https://openweathermap.org/';
  }
  function getOpenWeatherLink() {
    return 'OpenWeatherMap';
  }
  function getOpenWeatherDescription() {
    return 'Weather forecast service powered by';
  }
}
