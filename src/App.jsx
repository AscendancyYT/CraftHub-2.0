import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>;
}

export default App;
