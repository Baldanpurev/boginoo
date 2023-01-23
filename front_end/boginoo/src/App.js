import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import User from "./Pages/User";
import { Provider } from "./Context/Context";

function App() {
  return (
    <BrowserRouter className="app">
      <Provider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/userProfile" element={<User />} />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
