export default function WeatherListPresenter() {
  return {
    getOtherCities,
  };
  function getOtherCities() {
    return [{
      name: 'Moscow',
      q: 'Moscow,RU',
    },
    {
      name: 'London',
      q: 'London,GB',
    },
    {
      name: 'Auckland',
      q: 'Auckland,NZ',
    }] as const;
  }
}
