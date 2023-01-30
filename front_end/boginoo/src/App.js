import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import User from "./Pages/User";
import { Provider } from "./Context/Context";
import Redirect from "./Pages/Redirect";
import History from "./Pages/History";

function App() {
  return (
    <BrowserRouter className="app">
      <Provider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:redirect" element={<Redirect />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/userProfile" element={<User />} />
            <Route path="/history/:email" element={<History />} />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
