// CHECKPOINT 1
// Refactored WeatherChecker promise
function WeatherChecker(forecast, partyDate, userName) {
  return new Promise((resolve, reject) => {
      const friends = forecast === 'forecast is sunny' ? 20 : 10;
      if (forecast === 'forecast is sunny') {
          resolve(`${partyDate} - ${userName}, Sunny weather, enjoy picnic party, invite ${friends} guests`);
      } else {
          reject(`${partyDate} - ${userName}, Rainy weather, enjoy house party, invite ${friends} guests`);
      }
  });
}

// Event listener for the user form
document.querySelector('.user-form').addEventListener('submit', async function (e) {
  e.preventDefault(); // Prevent the form from submitting the traditional way

  const userName = document.getElementById('user-name').value;
  const partyDate = document.getElementById('party-date').value;
  const resultList = document.getElementById('result-list');

  try {
      const forecast = await randomForecast();

      WeatherChecker(forecast, partyDate, userName)
          .then(result => {
              console.log(result);
              const listItem = document.createElement('li');
              listItem.textContent = result;
              resultList.appendChild(listItem);
          })
          .catch(error => {
              console.log(error);
              const listItem = document.createElement('li');
              listItem.textContent = error;
              resultList.appendChild(listItem);
          });
  } catch (error) {
      console.error("Error fetching the forecast: ", error);
  }
});

// The randomForecast function
function randomForecast() {
  return new Promise((resolve) => {
      setTimeout(() => {
          const isSunny = Math.random() < 0.5;
          resolve(isSunny ? 'forecast is sunny' : 'forecast is rainy');
      }, 1000); // 1 second delay to simulate an API call
  });
}

// CHECKPOINT 2
function getData() {
  fetch('https://onlineprojectsgit.github.io/API/WDEndpoint.json')
      .then(response => {
          // Check if the response is OK
          if (response.ok) {
              return response.json(); // Parse and return the JSON response
          } else {
              throw new Error('Request failed'); // If response is not OK, throw an error
          }
      })
      .then(data => {
          console.log(data); // Log the data to the console
          return data; // Return the data for further processing
      })
      .catch(error => {
          console.error(error.message); // Log any errors that occur during the fetch
      });
}

// Call the function to execute the fetch
getData();







/*
//   CHECKPOINT 2

const getData = async () => {
    const response = await fetch('https://onlineprojectsgit.github.io/API/WDEndpoint.json')
    response.then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.log('Error', error)
      });
  }

  // Checkpoint 3
*/
  




    

