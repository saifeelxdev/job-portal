import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Recruiter from './pages/Recruiter';
import Candidate from './pages/Candidate';
import ProtectedRoutes from './components/ProtectedRoutes';
import Unauthorized from './pages/Unauthorized';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/recruiter"
            element={
              <ProtectedRoutes allowedRoles={['recruiter']}>
                <Recruiter />
              </ProtectedRoutes>
            }
          ></Route>
          <Route
            path="/candidate"
            element={
              <ProtectedRoutes allowedRoles={['candidate']}>
                <Candidate />
              </ProtectedRoutes>
            }
          ></Route>
          <Route path="/unauthorized" element={<Unauthorized />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
