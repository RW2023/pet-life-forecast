function calculateCatAge() {
  let catHumanAge = 1;
  let catAge = 0;

  if (catHumanAge === 0) {
    catAge = 0;
  } else if (catHumanAge === 1) {
    catAge = 15;
  } else if (catHumanAge === 2) {
    catAge = 24;
  } else {
    catAge = 24 + (catHumanAge - 2) * 4;
  }
    return catAge;
}

export default calculateCatAge;
