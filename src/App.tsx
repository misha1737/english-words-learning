import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Default";
import Login from "./pages/Login";
import Catalog from "./pages/Catalog";
import { auth } from "./redux/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "./redux/modules/user/reducer";
import { Link, useNavigate } from "react-router-dom";
import { State } from "./redux/reducers";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state: State) => state.user.userData);
  useEffect(() => {
    console.log("!!!", userData);
    if (userData) {
      navigate("/catalog", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }, [userData]);
  auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch(setUserData(user));
      //  navigate("/catalog", { replace: true });
    } else {
      //  navigate("/login", { replace: true });
    }
  });
  return (
    <div className="App">
      <Routes>
        {/* <Route  path="/" element={<Layout><ToDo /></Layout>} />
					<Route  path="/swapi" element={<Layout><Swapi /></Layout>} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="*" element={<h1>404 Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
