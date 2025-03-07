// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupForm from "./Signup/Signup";
import HomePage from "./Homepage/HomePage";
import LoginForm from "./Login/Login";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginForm />} />
				{/* <Route path="/homepage" element={<HomePage />} /> */}
			</Routes>
		</Router>
	);
}

export default App;
