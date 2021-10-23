import { useEffect, useState } from 'react';
import classes from './header.module.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {Button, TextField} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LoginIcon from '@mui/icons-material/Login';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        const existingName = localStorage.getItem("name");
        const existingBalance = parseFloat(localStorage.getItem("balance")).toFixed(2);
        const existingRowData = localStorage.getItem("rowdata");
        // console.log({
        //     existingRowData
        // })
        dispatch({type:"SET_BALANCE",balance:isNaN(existingBalance)?9.99:existingBalance});
        //dispatch({type:"SET_ROW_DATA",rowdata:JSON.parse(existingRowData)});
    },[dispatch])

    const userName = useSelector(state => state.setbalance.name);

    let balance = 0;

    balance = useSelector(state => state.setbalance.balance);
    const rowdata = useSelector(state => state.setbalance.rowData);

    // const [name,setName] = useState(userName);
    // const [balance,setBalance] = useState(balanceInitial);

    useEffect(()=>{
        localStorage.setItem("name",userName);
        localStorage.setItem("balance",parseFloat(balance));
        localStorage.setItem("rowdata",JSON.stringify(rowdata));
    },[balance]);

    const [loginMenu,setLoginMenu] = useState(classes.loginRightMenuClose);

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const loginMenuToggle = () => {
        if(loginMenu===classes.loginRightMenuClose) {
            setLoginMenu(classes.loginRightMenu);
        }
        else {
            setLoginMenu(classes.loginRightMenuClose);
        }
    }

    const closeLoginMenu = () => {
        setLoginMenu(classes.loginRightMenuClose);
    }

    return (
        <>
            <div className={classes.headerDiv}>
                <div className={classes.companyLogo}>Veerjeet Singh</div>
                <div className={classes.flexright}>${parseFloat(balance).toFixed(2)}</div>
                <Stack className={classes.avatarStack} direction="row" spacing={2}>
                    <Avatar onClick={handleClick} alt="V" src="" />
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                        >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Stack>
                <div onClick={loginMenuToggle} className={classes.loginIconDiv}>
                    <LoginIcon className={classes.loginIcon} />
                </div>
                <div className={loginMenu}>
                    <div className={classes.loginMenuDiv}>
                        <span className={classes.loginTitle}>Login</span>
                        <div className={classes.loginCloseButtonDiv}><CancelIcon className={classes.loginCloseButton} onClick={closeLoginMenu} /></div>
                    </div>
                    <div className={classes.loginInputs}>
                        <div>
                            <TextField style={{width:"100%"}} label="User" variant="standard" />
                        </div>
                        <div>
                            <TextField style={{width:"100%"}} label="Password" variant="standard" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Header;