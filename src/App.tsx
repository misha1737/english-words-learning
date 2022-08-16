import Routes from "./routes";
import { useSelector } from "react-redux";
import { State } from "./redux/reducers";
function App() {
  const userData = useSelector((state: State) => state.user.userData);
  return (
    <div className="App">
      <Routes isAuth={!!userData?.token} />
    </div>
  );
}

export default App;
