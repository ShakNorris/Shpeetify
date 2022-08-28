import React, {useEffect, useState} from 'react'
import './App.css';
import Login from './Login'
import Player from './Player';
import { getTokenFromUrl} from './spotify'
import SpotifyWebApi from "spotify-web-api-js"
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi //connecting our access token so spotify can communicate to our react project

function App() {

  const [{user, token}, dispatch] = useDataLayerValue(); //special tool to pass to the data layer to update values

  //runs the code on a specific condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "" //hiding access token for security reasons
    const _token = hash.access_token;

    if(_token){

      dispatch({
        type: "SET_TOKEN",
        token: _token
      })

      
      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        console.log(user)

        dispatch({ //pops user right into the data layer
          type: "SET_USER",
          user: user
        })
      }) //returns user account info
    }

    // console.log(token)
  }, []);

  return (
    <div className="App">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
