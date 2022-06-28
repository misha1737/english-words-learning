
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Default";
import Login from "./pages/Login"
function App() {
  return (
    <div className="App">
			<Router>
				<Routes>
					{/* <Route  path="/" element={<Layout><ToDo /></Layout>} />
					<Route  path="/swapi" element={<Layout><Swapi /></Layout>} /> */}
					<Route  path="/login" element={<Login />} />
					<Route path="*" element={<h1>404 Page not found</h1>}/>
				</Routes>
			</Router>
		</div>
  )
}

export default App
