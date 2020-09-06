import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Header.css'
import NavBar from '../NavBar/NavBar'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className="displayFlex">
            <div className={classes.root} style={{ overflowX: 'hidden' }}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}><h2>HIT POST</h2></Paper>
                    </Grid>
                </Grid>
            </div>
            <div className="navigation">
                <NavBar></NavBar>
            </div>
        </div>
    );
}
