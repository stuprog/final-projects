import React from 'react';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core/styles';
import { useNavigate  } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
} from '@material-ui/core';
const baseURL = "http://localhost:5000/api/categories";
const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    deleteButton: {
        fontWeight: 'bold',
        background: "#ff3333",
        margin: '10px 10px'
    },
    updateButton: {
        fontWeight: 'bold',
        background: "#22bb33",
        margin: '10px 10px'
    },
    buttons: {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    button: {
        display: "flex",
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
}));


function CategoryList() {

    const [categories, setCategories] = React.useState([]);
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    let history = useNavigate();
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    React.useEffect(() => {
        axios.get(baseURL).then(response => {
            console.log(response)
            setCategories(response.data.categories);
        })
        .catch(err => console.log(err));
      }, []);

    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeaderCell}>Category ID</TableCell>
                        <TableCell className={classes.tableHeaderCell}>title</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                        <TableRow key={row._id}>
                              <TableCell>{row._id}</TableCell>
                            <TableCell>{row.title}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={categories.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </TableFooter>
            </Table>
            <div className={classes.buttons}>
                <Button
                    className={classes.button}
                    style={{background: "#00378c"}}
                    variant="contained"
                    size="medium"
                    color="primary"
                    onClick={()=> history("/")}
                >
                    Back
                </Button>
                </div>
        </TableContainer>
    );
}

export default CategoryList;