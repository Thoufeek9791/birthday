import './App.css'
import { CountdownPage, NamePage } from './components/Birthday'
import { Route, Routes } from 'react-router'

function App() {  
  

  return (
    <Routes>
            <Route path="/" element={<CountdownPage />} />
            <Route path="/name" element={<NamePage />} />
        </Routes>
  )
}

export default App
