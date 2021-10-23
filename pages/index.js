// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import classes from './index.module.css';
import {DataGrid} from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import {BsFillSuitDiamondFill,BsFillSuitSpadeFill,BsFillSuitHeartFill,BsFillSuitClubFill } from 'react-icons/bs';

export default function Home() {

  const rowdata = useSelector(state => state.setbalance.rowData);
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'slot1', headerName: 'Slot 1', width: 200 },
    { field: 'slot2', headerName: 'Slot 2', width: 200 },
    { field: 'slot3', headerName: 'Slot 3', width: 200 },
    { field: 'time', headerName: 'Time', width: 1000 },
  ];
  const rows = [
    { id: 1, slot1: 1, slot2: 2, slot3: 3, time:new Date() },
  ];
  return (
    <>
      <div className={classes.resultDiv}>
        <DataGrid
          rows={rowdata}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    </>
  )
}
