const convertNumberToTime = (num) => {
  if (num < 12) {
    return num + ":00 AM";
  } else if (num === 12) {
    return num + ":00 PM";
  } else {
    return (num % 12) + ":00 PM";
  }
}

export default convertNumberToTime;
