import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";
import Products from "./Components/Products";

function App() {

  return <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </>;
}

export default App;
