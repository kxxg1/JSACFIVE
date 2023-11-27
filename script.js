// CHECKPOINT 1
const WeatherChecker = new Promise((resolve, reject) => {
    const isWeather = true;
    let friends = 20
    if (isWeather) {
        resolve(`Party in the Park with ${friends} guests.`)
    }else {
        friends = friends -10
        reject(`Party at home with ${friends} guests.`)
    }
        
  })

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

  




    

