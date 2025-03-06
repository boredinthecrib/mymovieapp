// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupForm from "./Signup/Signup";
import HomePage from "./Homepage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
