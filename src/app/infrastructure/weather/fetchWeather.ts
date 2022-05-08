export type FetchQuery = {
    q : string
} |
{
    lat: string,
    lon: string
}

export interface WeatherDataModel {
    base: string
    clouds: { all: number }
    cod: number
    coord: { lon: number, lat: number }
    dt: number
    id: number
    main: { temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number }
    name: string
    sys: { type: number, id: number, country: string, sunrise: number, sunset: number }
    timezone: number
    visibility: number
    weather: [{ id: number, main: string, description: string, icon: string }]
    wind: { speed: number, deg: number }
}

export default async function fetchWeather(query: FetchQuery, signal: AbortSignal) {
  const search = new URLSearchParams({
    ...query,
    appid: process.env.REACT_APP_OPENWEATHER_API_KEY as string,
  }).toString();
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?${search}`,
    { signal },
  );
  const json = await response.json();
  return json as WeatherDataModel;
}
