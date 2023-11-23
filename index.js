const arrayOfNumbers = [1, 4, 9, 16, 3, 10, 44];

/**
 * Map
 */
const doubles = arrayOfNumbers.map((number) => {
    return number * 2;
});

console.log(doubles);

/**
 * Reduce
 */
const initialValue = 0;
const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, initialValue,
);

console.log(sum);

/**
 * Filter
 */

const numberLessThenTen = arrayOfNumbers.filter((number) => {
    return number < 10;
})

console.log(numberLessThenTen);

/**
 * Sort
 */
const students = [
    { name: "Alex", grade: 15 },
    { name: "Devlin", grade: 15 },
    { name: "Eagle", grade: 13 },
    { name: "Sam", grade: 14 },
];
students.sort((firstItem, secondItem) => {
    return firstItem.grade - secondItem.grade;
});
