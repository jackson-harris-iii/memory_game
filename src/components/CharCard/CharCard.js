import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

const styles = {
    card: {
        maxWidth: 155,
        marginTop: '10%',
    },
    media: {
        height: 0,
        paddingTop: '150%', // 16:9
    }
};

function CharCard(props) {
    const { classes } = props;
    return (    
        <Grid item xs={3}>
            <Card 
                className={classes.card}
                color="secondary"
            >
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.name}
                    onClick={() => props.updateScore(props.id)}
                />
            </Card>    
        </Grid>     
    )
}

CharCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharCard);