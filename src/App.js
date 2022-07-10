import './App.css';
import "./App.css";
import Home from './Form/Home';
import LoginForm from './Form/LoginForm';
import SignForm from './Form/SignForm';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import OpenApp from './Components/OpenApp';
import Buy from './Components/Buy';

function App() {
  const [ID, setID] = useState();
  
  useEffect(() => {
    setID(uuidv4);
  }, [])
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path = '/'
            element={<><Home/></>}
          /> 


          {/* <Route
            path = '/'
            element={<><OpenApp/></>}
          /> */}

           <Route
            path = '/Login'
            element={<><LoginForm UniqueID = {ID} /></>}
          />

          <Route
            path = '/Registeration'
            element={<><SignForm/></>}
          />

           <Route
            path = {`/${ID}`}
            element={<><OpenApp/></>}
          />

          <Route
            path = {`/${ID}/Buy`}
            element={<><OpenApp UniqueID = {ID} /><Buy/></>}
          />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
