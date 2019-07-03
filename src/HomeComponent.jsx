import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

function HomeComponent() {
    const classes = useStyles();
    localStorage.setItem("password", "12345");
    localStorage.setItem("username", "vasya");

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    Hello, bitch!
                </Typography>
                <Typography component="p">
                    This is home page!
                </Typography>
            </Paper>
        </div>
    );
}

export default HomeComponent;