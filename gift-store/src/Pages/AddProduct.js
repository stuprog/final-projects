import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {makeStyles} from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";
import Button from "@material-ui/core/Button";
import {blue} from "@mui/material/colors";
import { useNavigate  } from "react-router-dom";

const divStyle = {
    display: "flex",
    alignItems: "center",
};

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
    marginText: {
        marginRight: 6,
    },
    buttons: {
        display: "flex",
        justifyContent: "flex-end",
    },
    button: {
        marginTop: theme.spacing(8),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(3)
    },
    title: {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(3),
        color: theme.palette.secondary.dark
    },
}));
export default function CreateProduct() {
    const classes = useStyles();
    let history = useNavigate();
    return (
        <React.Fragment>
            <Typography variant="h4" gutterBottom className={classes.title}>
                Create Product
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <TextField
                        required
                        variant="outlined"
                        id="Name"
                        name="name"
                        label="Name"
                        fullWidth
                        size="medium"
                    />
                </Grid>
                <Grid item xs={12}  >
                    <TextField
                        required
                        id="category"
                        name="category"
                        label="category"
                        fullWidth
                        variant="outlined"
                        size="medium"
                    />
                </Grid>
                 <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="price"
                        name="price"
                        label="price"
                        fullWidth
                        variant="outlined"
                        size="medium"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="quantity"
                        name="quantity"
                        label="quantity"
                        fullWidth
                        variant="outlined"
                        size="medium"
                    />
                </Grid>
                

            
            </Grid>
            <div className={classes.buttons}>
                <Button
                    className={classes.button}
                    style={{background: "#FFFFFF", color: "#00378c"}}
                    variant="contained"
                    size="medium"
                    color="primary"
                    onClick={() => history("/")}
                >
                    Back
                </Button>
                <Button
                    className={classes.button}
                    style={{background: "#00378c"}}
                    variant="contained"
                    size="medium"
                    color="primary"
                >
                    Create
                </Button>
            </div>
        </React.Fragment>
    );
}
