//Put current year in footer
const theYear = new Date();
console.log(theYear.getFullYear());
document.querySelector('#year').textContent = theYear.getFullYear();