import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button/Button";

const useStyles = makeStyles(() => ({
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },

}));

function FooterComponent() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Button color="inherit" variant="h6" className={classes.title}>
                        Copyright&nbsp;
                        {
                            (new Date).getFullYear()
                        }
                    </Button>
                    <div className={classes.grow} />
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default FooterComponent;