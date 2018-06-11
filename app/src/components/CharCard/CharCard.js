import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card_image: {
        maxWidth: 75,
        maxHeight: 75,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    
};

function SimpleCard(props) {
    const { classes } = props;
    return <div>
				<div class="row">
					<div class="col m4">
                <div className="card z-depth-3 p-3 ml-2 mr-2 text-center leftPanel">
							<div className="card_image">
								<img alt={props.name} src={props.image}/>
							</div>							
						</div>
					</div>
				</div>
			</div>;
}

export default withStyles(styles)(SimpleCard);