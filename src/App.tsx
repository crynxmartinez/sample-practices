import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import YFLForm from './pages/YFLForm'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/yfl-form" element={<YFLForm />} />
    </Routes>
  )
}

export default App
