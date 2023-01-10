import "./css/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Africa from "./components/countries/africa";
import Americas from "./components/countries/americas";
import Asia from "./components/countries/asia";
import Europe from "./components/countries/europe";
import Oceania from "./components/countries/oceania";
import All from "./components/countries/all";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/all" element={<All />} />
        <Route path="/africa" element={<Africa />} />
        <Route path="/Asia" element={<Asia />} />
        <Route path="/Europe" element={<Europe />} />
        <Route path="/oceania" element={<Oceania />} />
        <Route path="/Americas" element={<Americas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
