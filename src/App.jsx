import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SignupForm from "./Signup/Signup";
import HomePage from "./Homepage/HomePage";
import LoginForm from "./Login/Login";
import Profile from "./Profile/Profile";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginForm />} />
				<Route path="/profile" element={<Profile />} />
				{/* <Route path="/homepage" element={<HomePage />} /> */}
			</Routes>
		</Router>
	);
}

export default App;
