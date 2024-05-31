import axios from 'axios';


function generateJoke() {
  const headerConfig = {
    headers: {
      Accept: "application/json"
    }
  }
  const jokeDiv = document.getElementById('joke');
  axios.get("https://icanhazdadjoke.com",headerConfig)
    .then((response) => {
      console.log("Response: ", response.data);
      // append before the current child
      jokeDiv.prepend(document.createTextNode(response.data.joke));
      joke.style.color = "black";
      return response.data.joke;
    })
    .catch((error) => {
      console.log("Error: ", error);
      jokeDiv.prepend(document.createTextNode("Error fetching joke."));
      joke.style.color = "red";
      return {
        error: "Error fetching joke."
      }
    });
}

export default generateJoke;