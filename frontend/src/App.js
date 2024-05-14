import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CreateCompany from "./pages/CreateCompany";
import Login from "./pages/Login";
import JoinCompany from "./pages/JoinCompany";
import CompanyDetails from "./pages/CompanyDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/createcompany" element={<CreateCompany/>} />
          <Route exact path="/joincompany" element={<JoinCompany/>  } />
          <Route exact path="/dashboard/:companyId" element={<CompanyDetails/>  } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
