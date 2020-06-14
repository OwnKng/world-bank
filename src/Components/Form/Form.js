import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const styles = {
    margin: "0px auto",
    width: 300
}

export const Form = (props) => {
    
    return (
        <ThemeProvider theme={darkTheme}>
            <Autocomplete 
                id="country-native-simple'"
                options={props.data}
                getOptionLabel={(option) => option.country}
                style={styles}
                onChange = {props.onChange}
                renderInput={(params) => <TextField {...params} label="Country" variant="outlined" />}
            />
        </ThemeProvider>
    )
}