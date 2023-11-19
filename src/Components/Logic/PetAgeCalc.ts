// Function to calculate cat age in cat years
function calculateCatAge(catHumanAge: number): number {
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

// Function to calculate dog age in dog years
function calculateDogAge(dogHumanAge: number): number {
  let dogAge = 0;

  if (dogHumanAge <= 2) {
    dogAge = dogHumanAge * 10.5;
  } else {
    dogAge = 21 + (dogHumanAge - 2) * 4;
  }

  return dogAge;
}

// Exporting the functions
export { calculateCatAge, calculateDogAge };
