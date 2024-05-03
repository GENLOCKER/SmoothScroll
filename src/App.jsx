import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import Navbar from "./components/Navbar";

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/" component={Home} />
    //     <Route path="/signin" component={SigninPage} />
    //   </Switch>
    // </Router>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </Router>
  );
}

export default App;
