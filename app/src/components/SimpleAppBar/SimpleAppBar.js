import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import brown from '@material-ui/core/colors/brown'
import Counter from "../Counter"

const styles = {
    root: {
        flexGrow: 1,
    },
};

const brownC = brown[700]


function SimpleAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" color='primary'>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Memory Game
                    </Typography>
                    <Counter
                        score={props.score}
                     />
                </Toolbar>  
            </AppBar>
        </div>
    );
}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);