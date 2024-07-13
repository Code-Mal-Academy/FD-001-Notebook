// //! IN JAVASCRIPT
// const user = {
//     id: 1,
//     fName: "Tom",
//     lName: "Everson",
//     age: 18
// }

// const multiplyAge = (age) => {
//     return age * 10
// }

// //! There is No Error Here 
// console.log(multiplyAge(user.fName))

const user = {
    id: 1,
    fName: "Tom",
    lName: "Everson",
    age: 18
}

//! We Declared Age Is Number Here
const multiplyAge = (age: number) => {
    return age * 10
}

//! There is An Error Here 
console.log(multiplyAge(user.age))