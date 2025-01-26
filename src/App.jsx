import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </>;
}

export default App;
