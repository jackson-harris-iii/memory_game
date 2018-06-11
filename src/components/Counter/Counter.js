import React from "react";
import Button from '@material-ui/core/Button';

const Counter = props => (
    <Button>
        score: {props.score} | highscore: {props.highScore}
    </Button>
)

export default Counter;
