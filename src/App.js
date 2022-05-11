import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Dashboard from './screens/Dashboard';
import Tambah from './screens/Dashboard/Tambah';
import Edit from './screens/Dashboard/Edit';

function App() {
  return (
    <div className="font-['Inter']">
      <Router>
        <Routes>
          <Route path="/" element={<p>Home</p>}/>
          <Route path="/admin" element={<Dashboard/>}/>
          <Route path="/admin/tambah" element={<Tambah/>}/>
          <Route path="/IntroReact" element={<p>test aja</p>}/>
          <Route path="*" element={<p>Halaman Gak ada Bro</p>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
