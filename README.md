# Event Party Planner Form (Javascript)

## Description

The form will allow the user to enter the following information: name and date of their event. The form will display a message that includes the user's name, date of the event, weather forecast, and the number of invites that should be sent.

Sunny weather: invite 20 guests
Rainy weather: invite 10 guests

## Authors

__Kash Ghanchi__
[GitHub](https://github.com/kxxg1 "Kash's GitHub") / [LinkedIn](http://linkedin.com/in/kashg1/ "Kash's LinkedIn") / <kashgh9@gmail.com>

## Features

### Form Functionality

* User can enter their name and date of event.
* User can submit the form to see the weather forecast message.
* Form will reset after submission.

### randomForecast Function

The `randomForecast` function is a simulation of an asynchronous API call that forecasts the weather. It returns a Promise that resolves after a delay of 1 second, simulating the time it might take for a real API call to complete.

The function uses `Math.random()` to generate a random number between 0 and 1. If the generated number is less than 0.5, the function resolves the Promise with the string 'forecast is sunny'. Otherwise, it resolves the Promise with the string 'forecast is rainy'.

This function is used to randomly determine the weather forecast for the purpose of this application.

Here's the function's code:

```javascript
function randomForecast() {
  return new Promise((resolve) => {
      setTimeout(() => {
          const isSunny = Math.random() < 0.5;
          resolve(isSunny ? 'forecast is sunny' : 'forecast is rainy');
      }, 1000); // 1 second delay to simulate an API call
  });
}
```

### Installation

1. Clone the repository
2. Open the `index.html` file in your browser
3. Start the App with Go Live.
