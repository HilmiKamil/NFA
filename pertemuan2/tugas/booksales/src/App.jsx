import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="Books" element={<Books />} />
              <Route path="Team" element={<Team />} />
              <Route path="Contact" element={<Contact />} />
            </Route>
            
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;