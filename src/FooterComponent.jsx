import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link/Link";

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
                    <Link color="inherit" variant="h6" href="https://material-ui.com/" className={classes.title}>
                        Copyright&nbsp;
                        {
                            (new Date).getFullYear()
                        }
                    </Link>
                    <div className={classes.grow} />
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default FooterComponent;