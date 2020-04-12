import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
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
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="data-form-inputs">
            <span className="d-block padding-s">Population</span>
            <input
              variant="outlined"
              required
              fullWidth
              id="population"
              label="Population"
              name="population"
              type="number"
              data-population
              value={state.population}
              onChange={handleChange}
            />
          </div>
              &nbsp;
          <div className="data-form-inputs">
            <span className="d-block padding-s">Reported Cases</span>
            <input

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
          </div>
          <div className="data-form-inputs">
            <span className="d-block padding-s">Total Hospital Beds</span>
            <input


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
          </div>
          <div className="d-flex">
            <div className="data-form-inputs">
              <span className="d-block padding-s">Time To Elapse</span>
              <input

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
            </div>
              &nbsp;
          </div>
          <br />
          <div className="data-form-inputs">
            <span className="d-block padding-s">Period Type</span>
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

          </div>
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
