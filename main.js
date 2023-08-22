// ------------------------------ The second, more optimal solution (what I found with more searching) 👇👇👇

// ----------------- variables
const spanIds = [
  "tax-status",
  "annual-income",
  "dependent",
  "employment-status",
  "employer",
  "occupation",
  "house-invest",
];
const spanElements = spanIds.map((id) => document.getElementById(id));

// ----------------- fetch data
fetch("information.json")
  .then((response) => response.json())
  .then((data) => {
    // Update HTML document
    const dataValues = Object.values(data);
    spanElements.forEach((span, index) => {
      span.innerHTML = `${dataValues[index]}`;
    });
  });

// ------------------------------ The first solution (the first thing that came to my mind) 👇👇👇

// ----------------- variables
// const taxStatusSpan = document.getElementById("tax-status");
// const annualIncomeSpan = document.getElementById("annual-income");
// const dependentSpan = document.getElementById("dependent");
// const employmentStatusSpan = document.getElementById("employment-status");
// const employerSpan = document.getElementById("employer");
// const occupationSpan = document.getElementById("occupation");
// const householdInvestableSpan = document.getElementById("house-invest");

// ----------------- fetch data
// fetch("information.json")
//   .then((response) => response.json())
//   .then((data) => {
//     // Update HTML document
//     const taxStatus = data.taxFilingStatus;
//     taxStatusSpan.innerHTML = taxStatus;

//     const annualIncome = data.annualPretaxIncome;
//     annualIncomeSpan.innerHTML = annualIncome;

//     const dependent = data.dependentsNonSpouse;
//     dependentSpan.innerHTML = dependent;

//     const employmentStatus = data.employmentStatus;
//     employmentStatusSpan.innerHTML = employmentStatus;

//     const employer = data.employer;
//     employerSpan.innerHTML = employer;

//     const occupation = data.occupation;
//     occupationSpan.innerHTML = occupation;

//     const householdInvestable = data.householdInvestable;
//     householdInvestableSpan.innerHTML = householdInvestable;
//   });
