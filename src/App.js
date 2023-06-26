import './App.css';
import { BrowserRouter, Route, Routes, } from "react-router-dom"
import LogIn from './component/LogIn';
import SignUp from './component/SignUp';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Home from './component/Home';
import ProtectedRoute from "./component/ProtectedRoute"
import ForgetPassword from './component/ForgetPassword';
function App() {
  return (
    <>
      <UserAuthContextProvider>

        <Routes>
          <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
        </Routes>
      </UserAuthContextProvider>
    </>

  );
}

export default App;
