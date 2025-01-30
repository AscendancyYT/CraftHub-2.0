import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";
import Products from "./Components/Products";
import Profile from "./Components/Profile";
import SignUp from "./Components/SignUp";

function App() {

  return <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/products" element={<Products />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signUp" element={<SignUp />}/>
    </Routes>
  </>;
}

export default App;
