import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
