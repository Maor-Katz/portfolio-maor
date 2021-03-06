import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm(props) {
    const {handleChange} = props;
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField required id="cardName" label="Name on card" fullWidth
                               onChange = {(e) => handleChange('cardName', e)}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="cardNumber" label="Card number" fullWidth
                               onChange = {(e) => handleChange('cardNumber', e)}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="expDate" label="Expiry date" fullWidth
                               onChange = {(e) => handleChange('expDate', e)}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        style={{color:'#039be5'}}
                        required
                        id="cvv"
                        label="CVV"
                        helperText="Last three digits on signature strip"
                        fullWidth
                        onChange = {(e) => handleChange('cvv', e)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                        label="Remember credit card details for next time"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}