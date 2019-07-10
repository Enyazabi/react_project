import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "react-router-dom/es/Link";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function HeaderComponent() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton component={Link} to={"/"}
                                edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Button component={Link}
                            to={"catalog"}
                            color="inherit" variant="h6" className={classes.title}>
                        Catalog
                    </Button>
                    <Button color="inherit"
                            component={Link}
                            to={"signin"}>Sign In</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default HeaderComponent;