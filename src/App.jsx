import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import IntroCard from './components/introCard/IntroCard'
import Game from './components/game/Game'
import './App.css'

function App() {
  const navigate = useNavigate()
  // redirect to path "/"
  useEffect(() => {
    if (location.pathname === "/game") navigate("/")
  }, [])

  return (
    <Routes>
      <Route path="/" element={<IntroCard />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;
