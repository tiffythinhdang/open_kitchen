const displayPartySize = (num) => {
  if (num === 1) {
    return "1 person";
  } else {
    return num + " people";
  }
};

export default displayPartySize;