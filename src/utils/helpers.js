const DATE = new Date();

// getDay function
export const getDay = () => {
  let day;
  if (DATE.getDay() === 1) {
    day = "Monday";
  }
  if (DATE.getDay() === 2) {
    day = "Tuesday";
  }
  if (DATE.getDay() === 3) {
    day = "Wednesday";
  }
  if (DATE.getDay() === 4) {
    day = "Thursday";
  }
  if (DATE.getDay() === 5) {
    day = "Friday";
  }
  if (DATE.getDay() === 6) {
    day = "Saturday";
  }
  if (DATE.getDay() === 7) {
    day = "Sunday";
  }
  return day;
};

// getMonth function
export const getMonth = () => {
  let month;
  if (DATE.getMonth() === 0) {
    month = "January";
  }
  if (DATE.getMonth() === 1) {
    month = "Febuary";
  }
  if (DATE.getMonth() === 2) {
    month = "March";
  }
  if (DATE.getMonth() === 3) {
    month = "April";
  }
  if (DATE.getMonth() === 4) {
    month = "May";
  }
  if (DATE.getMonth() === 5) {
    month = "June";
  }
  if (DATE.getMonth() === 6) {
    month = "July";
  }
  if (DATE.getMonth() === 7) {
    month = "August";
  }
  if (DATE.getMonth() === 8) {
    month = "September";
  }
  if (DATE.getMonth() === 9) {
    month = "October";
  }
  if (DATE.getMonth() === 10) {
    month = "November";
  }
  if (DATE.getMonth() === 11) {
    month = "December";
  }
  return month;
};

// getYear function
export const getYear = () => {
  return DATE.getFullYear();
};

// getDate
export const getDate = () => {
  return DATE.getDate();
};
