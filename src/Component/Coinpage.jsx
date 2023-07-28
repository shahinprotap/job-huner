// import mystyle from "../Style.module.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const Coinpage = () => {
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "white" }}>#</TableCell>
              <TableCell style={{ color: "white" }}>Name</TableCell>
              <TableCell sx={{ color: "white" }}>Price</TableCell>
              <TableCell sx={{ color: "white" }}>1h %</TableCell>
              <TableCell sx={{ color: "white" }}>24h %</TableCell>
              <TableCell sx={{ color: "white" }}>7d %</TableCell>
              <TableCell sx={{ color: "white" }}>Market Cap</TableCell>
              <TableCell sx={{ color: "white" }}>Volume(24h)</TableCell>
              <TableCell sx={{ color: "white" }}>Circulating Supply</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell style={{ color: "white" }}>22</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Coinpage;
