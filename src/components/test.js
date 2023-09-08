/* eslint-disable import/prefer-default-export */
const apiKey = '69f4010305ecd6da39559d7f47a939ed';

// eslint-disable-next-line import/prefer-default-export
// export const myFetch = async (lat, lon) => {
//   const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`);
//   const result = await response.text();
//   console.log(result);
// };

export const latAndLon = async (city) => {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`);
  const result = await response.json();
  console.log(result[0]);
};
