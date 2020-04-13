/* eslint-disable jsx-a11y/label-has-associated-control */
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
            <label htmlFor="Population" className="d-block padding-s">
              Population
              <input
                variant="outlined"
                required
                fullWidth
                id="population"
                name="population"
                type="number"
                data-population
                value={state.population}
                onChange={handleChange}
              />
            </label>
          </div>
              &nbsp;
          <div className="data-form-inputs">
            <label htmlFor="Reported Cases" className="d-block padding-s">
              Reported Cases
              <input

                variant="outlined"
                required
                fullWidth
                name="reportedCases"
                id="reported-cases"
                type="number"
                data-reported-cases
                value={state.reportedCases}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="data-form-inputs">
            <label htmlFor="Total Hospital Beds" className="d-block padding-s">
              Total Hospital Beds
              <input


                variant="outlined"
                required
                fullWidth
                id="total-hospital-beds"
                name="totalHospitalBeds"
                type="number"
                data-total-hospital-beds
                value={state.totalHospitalBeds}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="d-flex">
            <div className="data-form-inputs">
              <label htmlFor="Time To Elapse" className="d-block padding-s">
                Time To Elapse
                <input

                  variant="outlined"
                  required
                  fullWidth
                  id="time-to-elapse"
                  name="timeToElapse"
                  type="number"
                  data-time-to-elapse
                  value={state.timeToElapse}
                  onChange={handleChange}
                />
              </label>
            </div>
              &nbsp;
          </div>
          <br />
          <div className="data-form-inputs">
            <label htmlFor="Period Type" className="d-block padding-s">
              Period Type
              <Select
                id="period-type"
                name="periodType"
                variant="outlined"
                onChange={handleChange}
                data-period-type
                value={state.periodType}
                inputProps={{ 'data-period-type': true }}
              >
                <MenuItem data-period-type="true" value="days">Days</MenuItem>
                <MenuItem data-period-type="true" value="weeks">Weeks</MenuItem>
                <MenuItem data-period-type="true" value="months">Months</MenuItem>
              </Select>
            </label>

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
