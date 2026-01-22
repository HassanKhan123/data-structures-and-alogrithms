const analyzeCarMileage = (carsInfo) => {
  const totalMilege = carsInfo.reduce((acc, car) => acc + car.mileage, 0);
  const averageMileage = totalMilege / carsInfo.length;

  const highestMileageCar = carsInfo.reduce(
    (highest, car) => (car.mileage > highest.mileage ? car : highest),
    carsInfo[0],
  );

  const lowestMileageCar = carsInfo.reduce(
    (lowest, car) => (car.mileage < lowest.mileage ? car : lowest),
    carsInfo[0],
  );

  return {
    averageMileage,
    totalMilege,
    highestMileage: highestMileageCar,
    lowestMileage: lowestMileageCar,
  };
};

const cars = [
  {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    mileage: 30800,
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2019,
    mileage: 32000,
  },
  {
    make: "Chevrolet",
    model: "Impala",
    year: 2021,
    mileage: 17500,
  },
  {
    make: "Audi",
    model: "R8",
    year: 2020,
    mileage: 13000,
  },
  {
    make: "Tesla",
    model: "Model 3",
    year: 2018,
    mileage: 50000,
  },
];

const res = analyzeCarMileage(cars);
console.log(res);
