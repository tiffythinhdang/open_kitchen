const displayPrice = (num) => {
  switch (num) {
    case 2:
      return "$$";

    case 3:
      return "$$$";

    case 4:
      return "$$$$";

    default:
      return "Price is not published";
  }
};

export default displayPrice;