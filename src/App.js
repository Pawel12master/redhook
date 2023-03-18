import { useDispatch } from "react-redux";
import JokeList from "./components/JokeList";
import { reset } from "./store";
function App() {
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <div className="container">
      <button
        className="bg-red-500 rounded-full p-4 mx-12 my-12 text-white"
        onClick={() => handleReset()}
      >
        Reset Everything
      </button>
      <br></br>
      <JokeList />
    </div>
  );
}

export default App;
