import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: { main: '#795548' }, // Purple and green play nicely together.
		secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
		background: {
			image: require('../Theme/img/background.jpg'),
		},
	},
});

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
        body: {
            background: theme.palette.background.image
        }
    },
});

function AutoGrid(props) {
    const { classes } = props;

    return (
            <Grid 
                container 
                className={classes.root}
                container spacing={24}
                justify='center'
                background
                >
                {props.children}
            </Grid>
    );
}

AutoGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);