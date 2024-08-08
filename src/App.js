import React,{useContext,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Components/Login/Login';
import { AuthContext,FirebaseContext } from './store/Context';
import firebase from 'firebase/compat/app';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './store/PostContext';

function App() {
  const { user,setUser } = useContext(AuthContext);
  const {} = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  }, [user]);

  return (
    <Post>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/view' element={<View/>} />
      </Routes>
    </Router>
    </Post>
  );
}

export default App;
