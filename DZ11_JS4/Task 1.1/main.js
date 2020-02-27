let person = {};

function show(x) {
    for (let key in x) {
        console.log(x[key]);
    }
}

person.firstName = `Ivan`;
person.secondName = `Ivanov`;
show(person);

let newPerson = Object.assign({}, person);
console.log(newPerson);
show(newPerson);
newPerson.firstName = `Vova`;
newPerson.secondName = `Petriv`;
console.log(newPerson);
show(newPerson);

function data(x) {
    console.log(`Ім'я ${x.firstName}; Прізвище: ${x.secondName}`);
}

data(person);
data(newPerson);
