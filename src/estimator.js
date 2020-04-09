const covid19ImpactEstimator = (data) => {
  const {
    reportedCases,
    timeToElapse,
    periodType,
    totalHospitalBeds,
    region
  } = data;
  let rate;
  let period;

  if (periodType === 'days') {
    rate = Math.floor(timeToElapse / 3);
    period = timeToElapse;
  } else if (periodType === 'weeks') {
    rate = Math.floor((timeToElapse * 7) / 3);
    period = timeToElapse * 7;
  } else {
    rate = Math.floor((timeToElapse * 30) / 3);
    period = timeToElapse * 30;
  }
  // pandemic computations.
  const impactCurrentlyInfected = reportedCases * 10;
  const impactInfectionsByRequestedTime = impactCurrentlyInfected * 2 ** rate;
  const casesByRequestedTime = impactInfectionsByRequestedTime * 0.15;
  const impactHospitalBedsByRequestedTime = totalHospitalBeds * 0.35 - casesByRequestedTime;
  const impactCasesForICUByRequestedTime = impactInfectionsByRequestedTime * 0.05;
  const impactCasesForVentilatorsByRequestedTime = impactInfectionsByRequestedTime * 0.02;
  const impactDollarsInFlight = impactInfectionsByRequestedTime
    * region.avgDailyIncomePopulation
    * region.avgDailyIncomeInUSD
    * period;

  // worst case computations.
  const severeImpactCurrentlyInfected = reportedCases * 50;
  const severeImpactInfectionsByRequestedTime = severeImpactCurrentlyInfected * 2 ** rate;
  const severeCasesByRequestedTime = severeImpactInfectionsByRequestedTime * 0.15;
  const hospitalBedsByRequestedTime = totalHospitalBeds * 0.35 - severeCasesByRequestedTime;

  // Icu admits.
  const casesForICUByRequestedTime = severeImpactInfectionsByRequestedTime * 0.05;
  const casesForVentilatorsByRequestedTime = severeImpactInfectionsByRequestedTime * 0.02;
  const dollarsInFlight = severeImpactInfectionsByRequestedTime
    * region.avgDailyIncomePopulation
    * region.avgDailyIncomeInUSD
    * period;

  // data for simple case scenarios.
  const impact = {
    currentlyInfected: impactCurrentlyInfected,
    infectionsByRequestedTime: impactInfectionsByRequestedTime,
    severeCasesByRequestedTime: casesByRequestedTime,
    hospitalBedsByRequestedTime: impactHospitalBedsByRequestedTime,
    casesForICUByRequestedTime: impactCasesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime: impactCasesForVentilatorsByRequestedTime,
    dollarsInFlight: impactDollarsInFlight
  };

  // worst case attributions.

  const severeImpact = {
    currentlyInfected: severeImpactCurrentlyInfected,
    infectionsByRequestedTime: severeImpactInfectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };

  // picking data.

  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
