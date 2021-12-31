import React from 'react';
import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core/styles';
import { useNavigate  } from "react-router-dom";
import axios from 'axios';
import {useSnackbar} from "notistack";
import { useState, useEffect } from 'react';
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

const deleteName = "Delete";
const updateName = "Update";
const baseURL = "http://localhost:5000/api/products";

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(3),
        color: theme.palette.secondary.dark
    },
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

   



function ProductList() {

    const [products, setProducts] = useState([]);
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    let history = useNavigate();
    const {enqueueSnackbar} = useSnackbar();



    useEffect(() => {
        axios.get(baseURL).then(response => {
            setProducts(response.data.products);
        })
        .catch(err => console.log(err));
      }, []);
      const DeleteCategory = (id) => {
        axios
        .delete(baseURL+"/"+id)
        .then(() => {
            enqueueSnackbar("Product Deleted successfuly ", { variant: "success" });
            window.location.reload()
        })
        .catch((err) => {
            console.log(err);
            enqueueSnackbar("Something went wrong with the server", {
                variant: "error",
            });
        });
};
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom className={classes.title}>
                GIFT STORE CHAKROUN 
            </Typography>
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeaderCell}>Product ID</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Name</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Price</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Quantity</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Category</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Creation Date</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Last Updated</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                        <TableRow key={row._id}>
                            <TableCell>
                                <Grid container>
                                   {row._id}
                                </Grid>
                            </TableCell>
                            <TableCell>
                                <Typography color="primary" variant="subtitle2">{row.quantity}</Typography>
                            </TableCell>
                            <TableCell>{row.price}</TableCell>
                            <TableCell>{row.quantity}</TableCell>
                            <TableCell>{row.category}</TableCell>
                            <TableCell>{row.created}</TableCell>
                            <TableCell>{row.updated}</TableCell>
                            <TableCell>
                                <Typography><Button
                                className={classes.updateButton}
                                variant="contained"
                                size="medium"
                                color="primary"
                                onClick={() => alert("update")
                                }
                            >
                                {updateName}
                            </Button><Button
                                className={classes.deleteButton}
                                variant="contained"
                                size="medium"
                                color="primary"
                                onClick={() => DeleteCategory(row._id)
                                }
                            >
                                {deleteName}
                            </Button></Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TablePagination
                        rowsPerPageOptions={[10, 15, 20]}
                        component="div"
                        count={products.length}
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
                    onClick={()=> history("/addProduct")}
                >
                    Add a new Product
                </Button>
                <Button
                    className={classes.button}
                    style={{background: "#00378c"}}
                    variant="contained"
                    size="medium"
                    color="primary"
                    onClick={()=> history("/addCategory")}
                >
                    Add a new Category
                </Button>
                <Button
                    className={classes.button}
                    style={{background: "#00378c"}}
                    variant="contained"
                    size="medium"
                    color="primary"
                    onClick={()=> history("/viewCategories")}
                >
                    View all Categories
                </Button>
                </div>
        </TableContainer>
        </div>
    );
}

export default ProductList;