import React, {useEffect, useState} from 'react'
import './App.css';
import Login from './Login'
import { getTokenFromUrl} from './spotify'

function App() {

  const [token,setToken] = useState(null);

  //runs the code on a specific condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "" //hiding access token for security reasons
    const _token = hash.access_token;

    if(_token){
      setToken(_token)
    }
    console.log(token)
  }, []);

  return (
    <div className="App">
      {
        token ? (
          <h1>Im IN :D</h1>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
