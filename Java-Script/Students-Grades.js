// Write a code which can give grades to students according to theirs marks using Conditionals Assignment on 4-10-23

let percentage=parseInt(prompt(`Enter Your Percentage:`))
if(percentage>=80 && percentage<=100)
{
    console.log(`Congratulations Your Result is Distinction!!!`)
}
else if(percentage>=60 && percentage<80)
{
    console.log(`Congratulations Your Result is First Class!!!`)
}
else if(percentage>=50 && percentage<60)
{
    console.log(`Congratulations Your Result is Second Class!!!`)
}
else if(percentage>=35 && percentage<50)
{
    console.log(`Congratulations Your Passed !!!`)
}
else
{
    console.log("You're FAIL ")
}

