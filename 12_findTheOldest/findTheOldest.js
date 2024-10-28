const findTheOldest = (people) => {
  return people.reduce((acc, person) => {
  const yearsLived = person.yearOfDeath - person.yearOfBirth;
    return yearsLived > acc.years
    ? { name: person.name, years: yearsLived }
    : acc;
}, {name: '', years: 0 });
};

// Do not edit below this line
module.exports = findTheOldest;
