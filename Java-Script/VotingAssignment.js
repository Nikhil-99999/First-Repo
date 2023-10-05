// Assignment Program on Voting Eligibility on 4-10-23 
let age= parseInt(prompt("Enter Your age:"))
if(age>=18)
{
    console.log("Congratulations You're Eligible to Vote")
}
else
{
    let gap=18-age
    console.log(`Sorry You have To wait ${gap} years to be Eligible for Voting!!!!`)
}


