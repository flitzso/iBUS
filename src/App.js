import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import ViagemForm from './components/ViagemForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viagemform" element={<ViagemForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

