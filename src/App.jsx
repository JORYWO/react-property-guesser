import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { PropertyContext } from "./PropertyContext"
import IntroCard from './components/introCard/IntroCard'
import Game from './components/game/Game'
import Results from './components/results/Results'

function App() {
  const navigate = useNavigate()
  // redirect to path "/"
  useEffect(() => {
    if (location.pathname === "/game" || location.pathname === "/results") navigate("/")
  }, [])

  return (
    <PropertyContext>
    <Routes>
      <Route path="/" element={<IntroCard />} />
      <Route path="/game" element={<Game />} />
      <Route path="/results" element={<Results />} />
    </Routes>
    </PropertyContext>
  );
}

export default App;
