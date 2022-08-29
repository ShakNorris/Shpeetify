import React from 'react'
import './Footer.css'
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Grid, Slider, Stack } from '@mui/material';

function Footer() {

  return (
    <div className='footer'>
        <div className='footer_left'>
          <img className="album_logo" src="https://i.scdn.co/image/ab67616d0000b2736de37e432e720323f4e31edc" />
          <div className='song_info'>
            <h4>Raydar</h4>
            <p>JID</p>
          </div>
        </div>

        <div className='footer_center'>
          <ShuffleIcon sx={{ fontSize: 30 }}  className='footer_icon' />
          <SkipPreviousIcon sx={{ fontSize: 40 }}  className='footer_icon' />
          <PlayCircleFilledWhiteIcon sx={{ fontSize: 50 }} className="footer_icon" />
          <SkipNextIcon sx={{ fontSize: 40 }}  className='footer_icon' />
          <RepeatIcon sx={{ fontSize: 30 }}  className='footer_icon' />

        </div>

        <div className='footer_right'>
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon sx={{ fontSize: 30 }}  className='shuffle' />
            </Grid>
            <Grid item>
              <VolumeDownIcon sx={{ fontSize: 30 }}  className='shuffle' />
            </Grid>
            <Grid item xs>
              <Slider size="small" defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            </Grid>
            <Grid item>
              <VolumeUpIcon sx={{ fontSize: 30 }}  className='shuffle' />
            </Grid>
          </Grid>
        </div>
    </div>
  )
}

export default Footer