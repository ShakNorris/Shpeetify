import React from 'react'
import './Body.css'
import Header from './Header'
import { useDataLayerValue } from './DataLayer';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Songrow from './Songrow';

function Body({spotify}) {

  const [{discover_weekly}, dispatch] = useDataLayerValue();
  const songs = []

  discover_weekly?.tracks.items.forEach(element =>
    songs.push(element.track)
  )

  
  return (
    <div className='body'>
        <Header spotify={spotify} />
        <div className='body_info'>
          <img src={discover_weekly?.images[0].url} />
          <div className='body_infotext'>
            <strong>{discover_weekly?.type}</strong>
            <h2>{discover_weekly?.name}</h2>
            <p>{discover_weekly?.description}</p>
          </div>
        </div>
        <div className='body_icons'>
              <PlayCircleIcon sx={{ fontSize: 40 }} className='body_shuffle' />
              <FavoriteIcon sx={{ fontSize: 25 }} />
              <MoreHorizIcon sx={{ fontSize: 20 }} />
            </div>
        <div className='body_songs'>
          {songs.map(element =>
            <Songrow track={element} />
          )}
        </div>
    </div>
  )
}



export default Body