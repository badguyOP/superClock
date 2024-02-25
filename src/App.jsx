import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clock from './pages/Clocks'
import Timer from './pages/Clocktimer'
import StopWatch from './pages/ClockstopWatch'
import NavBar from './pages/Navbar';

function App() {

  return (
    <>
      <BrowserRouter> 
      <NavBar />
      <Routes>
        <Route path="/" element={<Clock />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/stopwatch" element={<StopWatch />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
