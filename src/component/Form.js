import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(3),
  },
  // Add form styling
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  formControl: {
    width: '100%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function Form() {
  const classes = useStyles();

  const [state, setState] = useState({
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71,
    },
    periodType: 'days',
    timeToElapse: '',
    reportedCases: '',
    population: '',
    totalHospitalBeds: '',
  });

  const isValid = state.population && state.totalHospitalBeds
  && state.reportedCases && state.timeToElapse;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(state);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" style={{ textAlign: 'center' }}>
          A simple web app to collect covid-19 pandemic Estimate.
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                autoFocus
                type="number"
                id="population"
                name="population"
                label="Population"
                variant="outlined"
                onChange={handleChange}
                value={state.population}
                inputProps={{ 'data-population': true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type="number"
                id="reported-cases"
                variant="outlined"
                name="reportedCases"
                label="Reported Cases"
                onChange={handleChange}
                value={state.reportedCases}
                inputProps={{ 'data-reported-cases': true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type="number"
                variant="outlined"
                id="total-hospital-beds"
                name="totalHospitalBeds"
                label="Total Hospital Beds"
                onChange={handleChange}
                value={state.totalHospitalBeds}
                inputProps={{ 'data-total-hospital-beds': true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                type="number"
                variant="outlined"
                name="timeToElapse"
                id="time-to-elapse"
                label="Time To Elapse"
                onChange={handleChange}
                value={state.timeToElapse}
                inputProps={{ 'data-time-to-elapse': true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="period-type-label">Period Type</InputLabel>
                <Select
                  id="period-type"
                  name="periodType"
                  variant="outlined"
                  label="Period Type"
                  onChange={handleChange}
                  value={state.periodType}
                  inputProps={{ 'data-period-type': true }}
                >
                  <MenuItem data-period-type="true" value="days">Days</MenuItem>
                  <MenuItem data-period-type="true" value="weeks">Weeks</MenuItem>
                  <MenuItem data-period-type="true" value="months">Months</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            fullWidth
            size="large"
            type="submit"
            color="primary"
            variant="contained"
            data-go-estimate
            disabled={!isValid}
            className={classes.submit}
          >
            Collect Estimate
          </Button>
        </form>
      </div>
    </Container>
  );
}
