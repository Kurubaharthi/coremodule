//import bcrypt from 'bcryptjs';
//const a=require('fs');
const bcrypt=require('bcrypt');
let user={
    name:'JB Tech Solutions',
    email:'jbtechsolutions@gmail.com',
    password:'jbtechsolutions123'
};
let salt=bcrypt.genSaltSync(10);
let hashedpassword=bcrypt.hashSync(user.password,salt);
console.log(hashedpassword);
let updatedUser={
    ...user,
    password:hashedpassword
};
//console.log(updatedUser);
//comparing passwords
if(bcrypt.compareSync('jbtechsolutions@123',hashedpassword))
{
    console.log("Password is MATCHED,you are logged");
}
else{
    console.log('Enter correct password');
}