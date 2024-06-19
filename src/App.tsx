import "./App.css";
import Navbar from "./components/customNavbar/CustomNavbar";
import Users from "./screens/Users";

// NOTE: Routing was not implemented for simplicity

function App() {
  return (
    <>
      <Navbar />
      <Users />
    </>
  );
}

export default App;
