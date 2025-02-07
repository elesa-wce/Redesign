import { BrowserRouter as Router, Routes, Route } from "react-router"
import Nav from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import Events from "./pages/Events.jsx"
import Gallery from "./pages/Gallery.jsx"
import Alumni from "./pages/Alumni.jsx"



function App() {
  return (
    <>
    <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/alumni" element={<Alumni/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
    </Router>
   </>
  )
}

export default App
