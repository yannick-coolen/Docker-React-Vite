import axios from 'axios';
import { useEffect, useState } from 'react';

import classes from './style/DisplayWeather.module.scss';

interface Weather {
  timezone: string;
  current_weather: {
    temperature: string;
  };
  current_weather_units: {
    temperature: string;
  };
}

export default function DisplayWeather() {
  const [weather, setWeather] = useState<Weather>();
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (!fetched) {
      const getWeatherData = async () => {
        try {
          const response = await axios.get(
            'https://api.open-meteo.com/v1/forecast?latitude=52.0767&longitude=4.2986&current_weather=true&timezone=auto'
          );
          setWeather(response.data);
          setFetched(true);
        } catch (error) {
          console.error(error);
        }
      };
      getWeatherData();
    }
  }, [fetched]);

  return (
    <p className={classes.weather}>
      {weather?.timezone.split('/')[1]}: {weather?.current_weather.temperature}{' '}
      {weather?.current_weather_units.temperature}
    </p>
  );
}
