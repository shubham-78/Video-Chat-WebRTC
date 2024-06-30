import React, { useContext, useState } from 'react'
import { Button, TextField, Grid, Typography, Container, Paper } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@mui/icons-material';
import { SocketContext } from '../SocketContext';
import '../styles/Option.css';

const Options = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    return (
        <Container className='container'>
            <Paper elevation={10} className='paper'>
                <form className='root' noValidate autoComplete='off'>
                    <Grid container className='gridContainer'>
                        <Grid item xs={12} md={6} className='pad'>
                            <Typography gutterBottom variant='h6'>Account Info</Typography>
                            <TextField label='Name' value={name} onChange={(e) => setName(e.target.value)} fullWidth></TextField>
                            <CopyToClipboard text={me} className='mar'>
                                <Button variant='contained' color='primary' fullWidth startIcon={<Assignment fontSize='large' />}>
                                    Copy Your ID
                                </Button>
                            </CopyToClipboard>
                        </Grid>
                        <Grid item xs={12} md={6} className='pad'>
                            <Typography gutterBottom variant='h6'>Make a call</Typography>
                            <TextField label='ID to Call' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth></TextField>
                            {callAccepted && !callEnded ? (
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    fullWidth
                                    startIcon={<PhoneDisabled fontSize='large' />}
                                    onClick={leaveCall}
                                    className='mar'
                                >
                                    Hang Up
                                </Button>
                            ) : (
                                <Button
                                    variant='contained'
                                    color='primary'
                                    fullWidth
                                    startIcon={<Phone fontSize='large' />}
                                    onClick={() => callUser(idToCall)}
                                    className='mar'
                                >
                                    Call
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </form>
                {children}
            </Paper>
        </Container>
    )
}

export default Options