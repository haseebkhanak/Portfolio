import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './portfolio';
export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  )
}

