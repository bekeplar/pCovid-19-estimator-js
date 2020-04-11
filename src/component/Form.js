import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  // Add form styling.
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 1, 2),
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
    // console.log(state);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          COVID-19 ESTIMATOR
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="population"
                variant="outlined"
                required
                fullWidth
                id="population"
                label="Population"
                autoFocus
                type="number"
                data-population
                value={state.population}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="reportedCases"
                label="Reported Cases"
                id="reported-cases"
                type="number"
                data-reported-cases
                value={state.reportedCases}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="total-hospital-beds"
                label="Total Hospital Beds"
                name="totalHospitalBeds"
                type="number"
                data-total-hospital-beds
                value={state.totalHospitalBeds}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="time-to-elapse"
                label="Time To Elapse"
                name="timeToElapse"
                type="number"
                data-time-to-elapse
                value={state.timeToElapse}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="period-type"
                select
                fullWidth
                label="Period Type"
                name="periodType"
                value={state.periodType}
                onChange={handleChange}
                variant="outlined"
              >
                <MenuItem value="days">Days</MenuItem>
                <MenuItem value="weeks">Weeks</MenuItem>
                <MenuItem value="months">Months</MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            className={classes.submit}
            data-go-estimate
            disabled={!isValid}
          >
            Collect Estimate
          </Button>
        </form>
      </div>
    </Container>
  );
}
