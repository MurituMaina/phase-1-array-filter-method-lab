// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, str) {

  return drivers.filter( driver => driver === str || driver.toLowerCase()===str.toLowerCase() || driver.toUpperCase === str.toUpperCase());
   
  }
function fuzzyMatch(drivers,str){
console.log(drivers.filter(driver => driver.indexOf(str) === 0))
return drivers.filter( driver => driver.indexOf(str) === 0);
}


function matchName(driver, str){
  const driverss = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
  console.log(driverss.filter(item => item.name === "Bobby"))
  return driverss.filter(item => item.name === "Bobby")
}
