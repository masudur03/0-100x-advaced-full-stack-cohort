const jwt = require("jsonwebtoken");

//decode, verify, generate


const value = {
    name: "harkirat",
    accountNumber: 123123123
}

//jwt, the process of creating the token
const token = jwt.sign(value, "secret")

console.log(token)
//this token has been generated using this secret, and hence this token can only
//be verified by using the secret
//this the token generated
//
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMxMjMsImlhdCI6MTcxMTU1NTQzNH0.Dd6JcWDQZjDmEl-7wvEV4VNSJqWY9puS3zyT5uBWC1g

//this is how to verify correct token
const verifyCorrect = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMxMjMsImlhdCI6MTcxMTU1NTQzNH0.Dd6JcWDQZjDmEl-7wvEV4VNSJqWY9puS3zyT5uBWC1g", "secret")

console.log(verifyCorrect)


//notice this throwss an error because the token is not same
const verifyToken = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c", "secret")