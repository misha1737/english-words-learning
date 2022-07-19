import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Default";
import Login from "./pages/Login";
import Catalog from "./pages/Catalog";
import { auth } from "./redux/firebase";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route  path="/" element={<Layout><ToDo /></Layout>} />
					<Route  path="/swapi" element={<Layout><Swapi /></Layout>} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="*" element={<h1>404 Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
