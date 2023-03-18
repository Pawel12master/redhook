import { useDispatch, useSelector } from "react-redux";
import { addJoke, removeJoke } from "../store";
import useFetch from "../data/useFetch";
function JokeList() {
  const { data, loading, error, refatch } = useFetch(
    "https://v2.jokeapi.dev/joke/Any?type=single"
  );
  const dispatch = useDispatch();
  const jokeList = useSelector((state) => {
    return state.jokes;
  });
  const handleaddJoke = (joke) => {
    refatch();
    dispatch(addJoke(joke));
  };
  const handleRemoveJoke = (joke) => {
    dispatch(removeJoke(joke));
  };
  const rednderedList = jokeList.map((joke) => {
    return (
      <li
        className="border-b-4 border-indigo-300 flex flex-row justify-between first-of-type:border-t-4 p-4"
        key={joke}
      >
        <div className="text-3xl">{joke}</div>
        <button
          className="mr-8  px-4 h-10 bg-red-500 text-white hover:bg-red-700 mt-auto mb-auto"
          onClick={() => {
            handleRemoveJoke(joke);
          }}
        >
          X
        </button>
      </li>
    );
  });
  return (
    <>
      <div className="flex flex-row justify-around">
        <h2 className="ml-12 text-3xl font-medium">Joke List</h2>
        <button
          className="bg-green-500 rounded-sm p-2 text-white"
          onClick={() => handleaddJoke(data?.joke)}
        >
          + Add Joke
        </button>
      </div>
      <ul className="p-6">{rednderedList}</ul>
    </>
  );
}
export default JokeList;
