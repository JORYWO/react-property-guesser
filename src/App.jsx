import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { usePropertyData } from "./PropertyContext";
import IntroCard from './components/introCard/IntroCard'
import Game from './components/game/Game'
import Results from './components/results/Results'

function App() {
  const navigate = useNavigate()
  const { guessNum } = usePropertyData()
  // redirect to path "/"
  useEffect(() => {
    if (location.pathname === "/game") {
      navigate("/")
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<IntroCard />} />
      <Route path="/game" element={<Game />} />
      <Route path="/results" element={guessNum !== 1 ? <Results /> : <Navigate to="/" replace={true} />} />
      <Route path="*" element={<Navigate to="/" replace={true} />}/>
    </Routes>
  );
}

export default App;
