import classes from './commonButtons.module.css';
import {Button,TextField} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import StartGame from '../startgame';

const Content = () => {
    
    const [GameDisplay,setGameDisplay] = useState("none");

    const showGameDisplay = () => {
        setGameDisplay("block");
    }

    const closeDisplay = () => {
        setGameDisplay("none");
    }

    return (
        <>
            <div className={classes.contentDiv1}>
                {/* <TextField className={classes.balanceTextField} id="standard-basic" label="Add Balance" variant="outlined"></TextField>
                <Button className={classes.balanceAddButton} variant="contained">Add</Button> */}
                <StartGame displayControl={GameDisplay} closeDisplay={closeDisplay} />
                <Button onClick={showGameDisplay} className={classes.startGameButton} variant="contained">Start Game</Button>
            </div>
        </>
    )
}

export default Content;