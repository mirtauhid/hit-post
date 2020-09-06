import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Post.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function OutlinedCard(props) {
    const { title, id } = props.post;

    const classes = useStyles();

    return (
        <div className="cardContainer">
            <Card className="classes.root card" variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2" >
                        <FontAwesomeIcon icon={faPenNib} />  {title}
                    </Typography>

                </CardContent>
                <CardActions>
                    <Button ><Link style={{ textDecoration: 'none' }} to={`/post/${id}`} size="small">Read more</Link></Button>
                </CardActions>
            </Card>
        </div>
    );
}
