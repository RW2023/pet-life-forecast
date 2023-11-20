// src/Components/Logic/LifeExpectancy.ts
export const getLifeExpectancy = (
  petType: 'cat' | 'dog',
  dogBreed: 'small' | 'medium' | 'large' | 'giant' = 'medium',
): number => {
  const catLifeExpectancy = 15; // Average cat life expectancy
  const dogLifeExpectancyByBreed = {
    small: 14, // Average life expectancy of small dogs
    medium: 12, // Average life expectancy of medium dogs
    large: 10, // Average life expectancy of large dogs
    giant: 8, // Average life expectancy of giant dogs
  };

  return petType === 'cat'
    ? catLifeExpectancy
    : dogLifeExpectancyByBreed[dogBreed];
};
