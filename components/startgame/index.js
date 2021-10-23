import { Button } from '@material-ui/core';
import classes from './startgame.module.css';
import {BsFillSuitDiamondFill,BsFillSuitSpadeFill,BsFillSuitHeartFill,BsFillSuitClubFill } from 'react-icons/bs';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { ReactDOM } from 'react';
import { render } from 'react-dom';

const StartGame = ({displayControl,closeDisplay}) => {

    const balance = useSelector(state => state.setbalance.balance);
    const rowdata = useSelector(state => state.setbalance.rowData);

    const [balanceNotification,setNotification] = useState("");
    
    const dispatch = useDispatch();

    const [initialSymbols,setInitialSymbols] = useState([
        {name:"diamond",shape:<BsFillSuitDiamondFill />},
        {name:"heart",shape:<BsFillSuitHeartFill style={{color:"red"}} />},
        {name:"club",shape:<BsFillSuitClubFill />},
        {name:"spade",shape:<BsFillSuitSpadeFill style={{color:"red"}} />}
    ]);

    const [item1,setItem1] = useState();
    const [item2,setItem2] = useState();
    const [item3,setItem3] = useState();
    const [item4,setItem4] = useState();
    const [item5,setItem5] = useState();
    const [item6,setItem6] = useState();
    const [item7,setItem7] = useState();
    const [item8,setItem8] = useState();
    const [item9,setItem9] = useState();

    const spin = (fake=false) => {

        setNotification(<div style={{color:"red"}}></div>);

        let firstRnd;
        let secondRnd;
        let thirdRnd;
        let fourthRnd;
        let fifthRnd
        let sixthhRnd;
        let seventhRnd;
        let eighthRnd;
        let ninthRnd;
        
        if(fake) {
            const onlySpade = initialSymbols.find(item=>item.name==="spade");

            firstRnd = onlySpade;
            secondRnd = onlySpade;
            thirdRnd = onlySpade;
            fourthRnd = onlySpade;
            fifthRnd = onlySpade;
            sixthhRnd = onlySpade;
            seventhRnd = onlySpade;
            eighthRnd = onlySpade;
            ninthRnd = onlySpade;
        }
        else {

            firstRnd = initialSymbols[Math.floor(Math.random()*initialSymbols.length)];
            secondRnd = initialSymbols[Math.floor(Math.random()*initialSymbols.length)];
            thirdRnd = initialSymbols[Math.floor(Math.random()*initialSymbols.length)];
            fourthRnd = initialSymbols[Math.floor(Math.random()*initialSymbols.length)];
            fifthRnd = initialSymbols[Math.floor(Math.random()*initialSymbols.length)];
            sixthhRnd = initialSymbols[Math.floor(Math.random()*initialSymbols.length)];
            seventhRnd = initialSymbols[Math.floor(Math.random()*initialSymbols.length)];
            eighthRnd = initialSymbols[Math.floor(Math.random()*initialSymbols.length)];
            ninthRnd = initialSymbols[Math.floor(Math.random()*initialSymbols.length)];
        }

        if(parseFloat(balance).toFixed(0)>=2){

            dispatch({type:"SET_BALANCE",balance:parseFloat(balance)-2});

            setItem1(firstRnd.shape);
            setItem2(secondRnd.shape);
            setItem3(thirdRnd.shape);
            setItem4(fourthRnd.shape);
            setItem5(fifthRnd.shape);
            setItem6(sixthhRnd.shape);
            setItem7(seventhRnd.shape);
            setItem8(eighthRnd.shape);
            setItem9(ninthRnd.shape);

            const slot1 = [firstRnd.name,secondRnd.name,thirdRnd.name];
            const slot2 = [fourthRnd.name,fifthRnd.name,sixthhRnd.name];
            const slot3 = [seventhRnd.name,eighthRnd.name,ninthRnd.name];

            const slot1Counts = {
                diamond:{count:slot1.filter(item=>item==="diamond").length},
                heart:{count:slot1.filter(item=>item==="heart").length},
                club:{count:slot1.filter(item=>item==="club").length},
                spade:{count:slot1.filter(item=>item==="spade").length},
            };

            const slot2Counts = {
                diamond:{count:slot2.filter(item=>item==="diamond").length},
                heart:{count:slot2.filter(item=>item==="heart").length},
                club:{count:slot2.filter(item=>item==="club").length},
                spade:{count:slot2.filter(item=>item==="spade").length},
            };

            const slot3Counts = {
                diamond:{count:slot3.filter(item=>item==="diamond").length},
                heart:{count:slot3.filter(item=>item==="heart").length},
                club:{count:slot3.filter(item=>item==="club").length},
                spade:{count:slot3.filter(item=>item==="spade").length}
            };

            // console.log({
            //     slot1Counts,
            //     slot2Counts,
            //     slot3Counts
            // })
            
            //2 in row
            if(slot1Counts.diamond.count===2 ||
                slot1Counts.heart.count===2 ||
                slot1Counts.club.count===2 ||
                slot1Counts.spade.count===2) {
                    dispatch({type:"SET_BALANCE",balance:parseFloat(balance)+0.5});
            }

            if(slot2Counts.diamond.count===2 ||
                slot2Counts.heart.count===2 ||
                slot2Counts.club.count===2 ||
                slot2Counts.spade.count===2) {
                    dispatch({type:"SET_BALANCE",balance:parseFloat(balance)+0.5});
            }

            if(slot3Counts.diamond.count===2 ||
                slot3Counts.heart.count===2 ||
                slot3Counts.club.count===2 ||
                slot3Counts.spade.count===2) {
                    dispatch({type:"SET_BALANCE",balance:parseFloat(balance)+0.5});
            }

            //3 in row
            if(slot1Counts.diamond.count===3 ||
                slot1Counts.heart.count===3 ||
                slot1Counts.club.count===3 ||
                slot1Counts.spade.count===3) {
                    dispatch({type:"SET_BALANCE",balance:parseFloat(balance)+2});
            }

            if(slot2Counts.diamond.count===3 ||
                slot2Counts.heart.count===3 ||
                slot2Counts.club.count===3 ||
                slot2Counts.spade.count===3) {
                    dispatch({type:"SET_BALANCE",balance:parseFloat(balance)+2});
            }

            if(slot3Counts.diamond.count===3 ||
                slot3Counts.heart.count===3 ||
                slot3Counts.club.count===3 ||
                slot3Counts.spade.count===3) {
                    dispatch({type:"SET_BALANCE",balance:parseFloat(balance)+2});
            }

            //3 spades in row
            if(slot1Counts.spade.count===3) {
                dispatch({type:"SET_BALANCE",balance:parseFloat(balance)+5});
                console.log("slot 1 spade");
            }

            if(slot2Counts.spade.count===3) {
                dispatch({type:"SET_BALANCE",balance:parseFloat(balance)+5});
                console.log("slot 2 spade");
            }

            if(slot3Counts.spade.count===3) {
                dispatch({type:"SET_BALANCE",balance:parseFloat(balance)+5});
                console.log("slot 3 spade");
            }

            // let firstRnd;
            // let secondRnd;
            // let thirdRnd;
            // let fourthRnd;
            // let fifthRnd
            // let sixthhRnd;
            // let seventhRnd;
            // let eighthRnd;
            // let ninthRnd;

            //{ id: 1, slot1: 1, slot2: 2, slot3: 3, time:new Date() },

            const Slot1symbols = () => {
                // return ( <div>
                //     <div>firstRnd.shape</div>
                //     <div>secondRnd.shape</div> 
                //     <div>thirdRnd.shape</div>
                // </div>
                // )

            }

            const Slot2symbols = () => {
                return (<div>
                    <div>fourthRnd.shape</div>
                    <div>fifthRnd.shape</div> 
                    <div>sixthhRnd.shape</div>
                </div>
                )
            }

            const Slot3symbols = () => {
                
                return ( <div>
                    <div>seventhRnd.shape</div>
                    <div>eighthRnd.shape</div> 
                    <div>ninthRnd.shape</div>
                </div>
                )
                
            }

            let rd = [];
            if(typeof rowdata === 'object') {
                rd = [...rowdata];
                if(rowdata.length===0){
                    rd.push({
                        id:1,
                        slot1:firstRnd.name + "," + secondRnd.name + "," + thirdRnd.name,
                        slot2:fourthRnd.name + "," + fifthRnd.name + "," + sixthhRnd.name,
                        slot3:seventhRnd.name + "," + eighthRnd.name + "," + ninthRnd.name,
                        time:new Date()
                    })
                }
                else {
                    const getRow = rowdata[rowdata.length-1].id;
                    rd.push({
                        id:getRow+1,
                        slot1:firstRnd.name + "," + secondRnd.name + "," + thirdRnd.name,
                        slot2:fourthRnd.name + "," + fifthRnd.name + "," + sixthhRnd.name,
                        slot3:seventhRnd.name + "," + eighthRnd.name + "," + ninthRnd.name,
                        time:new Date()
                    })
                }
            }

            //console.log(rd);

            dispatch({type:"SET_ROW_DATA",rowdata:rd});

            console.log(rowdata);

        }
        else {
            setNotification(<div style={{color:"red"}}>GAME OVER</div>)
        }
    }

    const closeGameDisplay = () => {
        closeDisplay();
    }

    const pd = (e) => {
        e.stopPropagation();
    }

    return (
        <div onClick={closeGameDisplay} style={{display:displayControl}} className={classes.blackDiv}>
            <br />
            <div onClick={pd}  className={classes.gameDiv}>
                <div className={classes.gamedivpart}>
                    <div className={classes.gameButtons}>
                        <Button onClick={spin.bind(this,false)} className={classes.spinButton} variant="contained">Spin</Button>
                        <Button onClick={spin.bind(this,true)} variant="contained">Fake</Button>
                        <Button onClick={closeGameDisplay} variant="contained">Close Game</Button>
                    </div>
                    <div>Balance Amount: {parseFloat(balance).toFixed(2)}</div> 
                    {balanceNotification}
                    <div className={classes.slotTitle}>Slot 1</div>
                    <br />
                    <div className={classes.firstSlotGame}>
                        
                        <div className={classes.symbolsDiv}>
                            <div className={classes.symbols}>{item1}</div>
                            <div className={classes.symbols}>{item2}</div>
                            <div className={classes.symbols}>{item3}</div>
                        </div>
                    </div>
                    <div className={classes.slotTitle}>Slot 2</div>
                    <br />
                    <div className={classes.firstSlotGame}>
                        
                        <div className={classes.symbolsDiv}>
                            <div className={classes.symbols}>{item4}</div>
                            <div className={classes.symbols}>{item5}</div>
                            <div className={classes.symbols}>{item6}</div>
                        </div>
                    </div>
                    <div className={classes.slotTitle}>Slot 3</div>
                    <br />
                    <div className={classes.firstSlotGame}>
                        
                        <div className={classes.symbolsDiv}>
                            <div className={classes.symbols}>{item7}</div>
                            <div className={classes.symbols}>{item8}</div>
                            <div className={classes.symbols}>{item9}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartGame;