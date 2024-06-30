import React from 'react'
import {Typography, AppBar} from '@mui/material';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';
import './styles/App.css';

const App = () => {
  return (
    <div className='wrapper'>
      <AppBar className='appBar' position='static' color='inherit'>
        <Typography variant='h2' align='center'>Video Chat</Typography>
      </AppBar>
      <VideoPlayer/>
      <Options>
        <Notifications/>
      </Options>
    </div>
  )
}

export default App