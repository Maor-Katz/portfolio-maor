import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faShekelSign} from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: '700',
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

export default function Review(props) {
    const {myList, values} = props;
    library.add(faShekelSign);
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {myList.map(product => (
                    <ListItem className={classes.listItem} key={product.title}>
                        <ListItemText
                            primary={product.quantity ? `${product.quantity} X ${product.title}` : product.title}
                            secondary={`${product.description}, ${product.chosenSize}`}/>
                        <Typography
                            variant="body2">{product.quantity ? product.quantity * product.price : product.price}</Typography>
                        <span className="shekelSign"><i className="fas fa-shekel-sign"></i></span>
                    </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Total"/>
                    <Typography variant="subtitle1" className={classes.total}>
                        {myList.reduce((acc, currentVal) => {
                            if (currentVal.quantity) {
                                return (currentVal.quantity * currentVal.price) + acc;
                            } else {
                                return currentVal.price + acc;
                            }
                        }, 0)}
                        {` `}<i className="fas fa-shekel-sign"></i>
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Shipping
                    </Typography>
                    <Typography
                        gutterBottom>{values.firstName ? `${values.firstName} ${values.lastName}` : null}</Typography>
                    <Typography gutterBottom>{values.address1 ? `${values.address1}` : null}</Typography>
                    <Typography gutterBottom>{values.mail ? `${values.mail}` : null}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Payment details
                    </Typography>
                    <Grid container>
                        <React.Fragment>
                            <Grid item xs={6}>
                                <Typography gutterBottom>Card Holder</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom>{values.cardName}</Typography>
                            </Grid>
                        </React.Fragment>
                        <React.Fragment>
                            <Grid item xs={6}>
                                <Typography gutterBottom>Card number</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography
                                    gutterBottom>{`xxxx-xxxx-xxxx-${values.cardNumber.slice(12, 16)}`}</Typography>
                            </Grid>
                        </React.Fragment>
                        <React.Fragment>
                            <Grid item xs={6}>
                                <Typography gutterBottom>Expiry date</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom>{values.expDate}</Typography>
                            </Grid>
                        </React.Fragment>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}