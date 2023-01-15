import {Table, TableBody, TableCell, 
    TableContainer, TableHead, 
    TableRow, Paper} from '@mui/material'

const ServiceHistory = () => {
function createData(
    name,
    day,
    date,
  ) {
    return { name, day, date };
  }
  
  const rows = [
    createData('#209 Sunshine in the Soul', 'Sun am', 'Jan 15'),
    createData('#343 Revive Us Again', 'Sun am', 'Jan 15'),
    createData('#81 When We See Christ', 'Sun am', 'Jan 15'),
    createData('#363 Wonderful Words of Life', 'Sun am', 'Jan 15'),
    createData('Psalm 15', 'Thurs', 'Jan 12'),
    createData('#230 Heavenly Sunlight', 'Thurs', 'Jan 12'),
    createData('#173 Love Lifted Me', 'Thurs', 'Jan 12'),
    createData('#56 When We All Get to Heaven', 'Thurs', 'Jan 12'),
    createData('#359 Thy Word Have I Hid in My Heart', 'Sun pm', 'Jan 8'),
    createData('#227 Saved By the Blood', 'Sun pm', 'Jan 8'),
    createData('#15 Lead Me to Calvary', 'Sun pm', 'Jan 8'),
    createData('#169 Come Thou Fount', 'Sun pm', 'Jan 8'),
    createData('#169 Come Thou Fount', 'Sun pm', 'Jan 8'),
    createData('Psalm 126', 'Sun am', 'Jan 8'),
    createData('#229 Since I Have Been Redeemed', 'Sun am', 'Jan 8'),
    createData('#19 There is a Fountain', 'Sun am', 'Jan 8'),
    createData('#275 Almost Persuaded', 'Sun am', 'Jan 8'),
    createData('#262 The Light of the World is Jesus', 'Thurs', 'Jan 5'),
    createData('#257 Look and Live', 'Thurs', 'Jan 5'),
    createData('#441 Great is Thy Faithfulness', 'Thurs', 'Jan 5'),
    createData('#170 Hallelujah! What a Savior!', 'Thurs', 'Jan 5'),
    createData('#94 Stand By Me', 'Sun pm', 'Jan 1'),
    createData('#426 I Heard the Bells on Christmas Day', 'Sun pm', 'Jan 1'),
    createData('#410 Faith is the Victory', 'Sun pm', 'Jan 1'),
    createData('#372 Let the Lower Lights Be Burning', 'Sun pm', 'Jan 1'),
    createData("#420 There's a Song in the Air", 'Sun am', 'Jan 1'),
    createData('#41 Sweet By and By', 'Sun am', 'Jan 1'),
    createData('#20 When I See the Blood', 'Sun am', 'Jan 1'),
    createData('#30 Nothing But the Blood', 'Sun am', 'Jan 1')
  ];
return ( 
    <>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow >
                    <TableCell sx={{fontWeight:'700'}}>Songs</TableCell>
                    <TableCell sx={{fontWeight:'700'}} align="left">Day</TableCell>
                    <TableCell sx={{fontWeight:'700'}} align="left">Date</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.day}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.date}
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
 );
}

export default ServiceHistory;