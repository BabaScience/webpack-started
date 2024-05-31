import generateJoke from "./generateJoke";
import './styles/main.scss';
import laughing from './assets/laughing.svg';


const jokeBtn = document.getElementById('jokeBtn');


jokeBtn.addEventListener('click', generateJoke);

const laughingImg = document.getElementById('laughImg');
laughingImg.src = laughing;


console.log("Joke: ", joke);