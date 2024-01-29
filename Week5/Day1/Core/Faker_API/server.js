
const express = require("express");
const app = express();
const port = 8000;

const {faker} = require('@faker-js/faker');

const createUser=()=>{
    const newUser={
        password:faker.internet.password(),
        email:faker.internet.email(),
        phoneNumber:faker.phone.number(),
        lastName:faker.person.lastName(),
        firstName:faker.person.firstName(),
        _id:faker.string.uuid()
    }
    return newUser
}


const createCompany=()=>{
    const newCompany={
        _id:faker.string.uuid(),
        name:faker.company.name(),
        address:{
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),
        }
    }
    return newCompany
}


const oneUser=createUser();
// console.log(oneUser);
const oneCompany=createCompany();
// console.log(oneCompany);
const userCompany=[oneUser,oneCompany];
// console.log(userCompany);


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );  


app.get("/api/users/new", (req, res) => {
    res.json(oneUser);
});
app.get("/api/companies/new", (req, res) => {
    res.json(oneCompany);
});
app.get("/api/user/company", (req, res) => {
    res.json(userCompany);
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );
