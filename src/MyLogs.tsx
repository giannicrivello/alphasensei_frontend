import { makeStyles } from '@material-ui/core/styles';
import { useGetLogsQuery, useMeQuery } from './generated/graphql';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



interface Props {



}
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export const MyLogs: React.FC<Props> = () => {
  const classes = useStyles();


    const {data} = useGetLogsQuery();
    const me = useMeQuery();
    const response = data?.getLogs[1]
    console.log(me.data?.me?.email)
    const [expanded, setExpanded] = React.useState(false);

  
    // <ul>
    // {data.getLogs.map(x => {
    //     if (x.user_id == me.data?.me?.email) {
    //         return (
    //             <ul>

    if(!data) {
        return null
    }
    return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>TECH NAME</TableCell>
            <TableCell align="right">RANK</TableCell>
            <TableCell align="right">CATEGORY</TableCell>
            <TableCell align="right">STATISTICS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.getLogs.map((data) => (
            <TableRow key={data.title}>
              <TableCell component="th" scope="row">
                {data.title}
              </TableCell>
              <TableCell align="right">{data.rank}</TableCell>
              <TableCell align="right">{data.category}</TableCell>
              {/* <TableCell align="right">{data.description}</TableCell> */}
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



        

  