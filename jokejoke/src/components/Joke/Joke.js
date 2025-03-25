import react from "react";
import Button from "../Button/Button";


const Joke = () => {

  const[Joke, setJoke] = react.useState("");
  const fetchApi = () => {

    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
    .then(res => res.json())
    .then(data => setJoke(data.joke));
  };

  return (
    <div className="joke">
      <Button callApi={fetchApi}></Button>
      <p>{Joke}</p>
    </div>

  );

}

export default Joke;