import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Counter from "../Counter"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#795548' }, // Purple and green play nicely together.
        secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
    },
});

const styles = {
    root: {
        flexGrow: 1,
    },
};


function SimpleAppBar(props) {
    const { classes } = props;
    return (
        <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Memory Game
                    </Typography>
                    <Counter
                        score={props.score}
                        highScore={props.highScore}
                     />
                </Toolbar>  
            </AppBar>
        </div>
        </MuiThemeProvider>
    );
}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);