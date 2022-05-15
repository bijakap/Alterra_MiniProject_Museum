import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import Dashboard from './screens/Dashboard';
import Tambah from './screens/Dashboard/Tambah';
import Edit from './screens/Dashboard/Edit';
// import TestPage from './components/TestPage';

function App() {
  let {id} = useParams()
  return (
    <div className="font-['Inter']">
      <Router>
        <Routes>
          <Route path="/" element={<p>Home</p>}/>
          <Route path="/admin" element={<Dashboard/>}/>
          <Route path="/admin/tambah" element={<Tambah/>}/>
          <Route path="admin/edit/:id" element={<Edit/>}/>
          <Route path="/IntroReact" element={<p>test aja</p>}/>
          <Route path="*" element={<p>Halaman Gak ada Bro</p>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
