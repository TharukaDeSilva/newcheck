async function getLocationData(location) {
  const openMapURL = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`;
  const weatherURL = "https://api.weather.gov/points/";

  try {
    const response = await fetch(openMapURL, {
      headers: {
        "User-Agent": "LocalDevTestApp/1.0", // OpenStreetMap requires a user-agent header
      },
    });
    const data = await response.json();

    if (data.length > 0) {
      let lat = data[0].lat;
      let lon = data[0].lon;

      console.log(`The coordinate of ${location} is ${lat}, ${lon}/forecast`);

      const weatherResponse = await fetch(weatherURL + `${lat},${lon}`);
      const weatherResult = await weatherResponse.json();

      const weatherStationRes = await fetch(
        weatherResult?.properties?.forecast,
      );
      const weatherForecast = await weatherStationRes.json();

    //   // console.log(weatherResult);
    //   console.log(_.map(weatherForecast.properties.periods, "temperature"));

    //   for (const data of weatherForecast.properties.periods) {
    //     console.log(data.name, "\n", data.temperature + " F");
    //   }

    

      return weatherForecast.properties.periods;
    } else {
      console.warn("No result found");
    }
  } catch (error) {
    console.log("Geocoding fetch failed: ", error);
  }
}
