import React from 'react'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions'
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SearchIcon from '@mui/icons-material/Search';
import { useDataLayerValue } from './DataLayer';


function Sidebar() {

  const [{playlists}, dispatch] = useDataLayerValue();
  const array = [1,2,3,4,5]
  return (
    <div className='sidebar'>
        <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png' />

        <SidebarOptions Icon={HomeIcon} option="Home" />
        <SidebarOptions Icon={SearchIcon} option="Search" />
        <SidebarOptions Icon={LibraryMusicIcon} option="Library" />
        
        <strong className='sidebar_title'>Playlists</strong>
        <hr />

        {playlists?.items?.map(playlist=>
          <SidebarOptions option={playlist.name} />
        )}

    </div>
  )
}

export default Sidebar