// src/Components/Logic/PetAgeCalc.ts
type BreedCategory = 'small' | 'medium' | 'large' | 'giant';

function calculateCatAge(catHumanAge: number): number {
  return catHumanAge === 0 ? 0 : 10 + (catHumanAge - 1) * 4;
}

function calculateDogAge(
  dogHumanAge: number,
  breedCategory: BreedCategory = 'medium',
): number {
  const dogLifespan = {
    small: 4,
    medium: 5,
    large: 6,
    giant: 7,
  };

  if (dogHumanAge <= 1) {
    return dogHumanAge * 10.5;
  } else {
    return 10.5 + (dogHumanAge - 1) * dogLifespan[breedCategory];
  }
}

function getAverageLifeExpectancy(
  species: string,
  breedCategory: BreedCategory = 'medium',
): number {
  const catLifeExpectancy = 15;
  const dogLifespan = {
    small: 14,
    medium: 12,
    large: 10,
    giant: 8,
  };

  return species === 'cat' ? catLifeExpectancy : dogLifespan[breedCategory];
}

function lifeExpectancy(
  humanAge: number,
  species: string,
  breedCategory: BreedCategory = 'medium',
): number {
  const animalAge =
    species === 'cat'
      ? calculateCatAge(humanAge)
      : calculateDogAge(humanAge, breedCategory);
  const averageLifeExpectancy = getAverageLifeExpectancy(
    species,
    breedCategory,
  );

  const remainingYearsAnimal = Math.max(averageLifeExpectancy - animalAge, 0);

  const dogLifespanInverse = {
    small: 1 / 4,
    medium: 1 / 5,
    large: 1 / 6,
    giant: 1 / 7,
  };

  return species === 'cat'
    ? remainingYearsAnimal / 4
    : remainingYearsAnimal * dogLifespanInverse[breedCategory];
}

export { calculateCatAge, calculateDogAge, lifeExpectancy };
