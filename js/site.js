
function getValues() {
  // get values from the page
  let fizzVal = document.getElementById('fizz').value;
  let buzzVal = document.getElementById('buzz').value;

  // call calculateResults
  const fizzBuzzArray = fizzBuzzC(fizzVal, buzzVal);
  // call display results
  displayResults(fizzBuzzArray);
  
}

// calculate results - loop with if statement
function fizzBuzzA(fizzVal, buzzVal) {

  // initialize return array
  const nums = [];

  // loop from 1 to 100
  for(let i = 1; i <= 100; i++){
    // if statement logic:
    // check to see if divisible by both 3 and 5
    // check to see if divisible by 5
    // check to see if divisible by 3
    // else push number to array
    if(i % fizzVal === 0 && i % buzzVal === 0){
      nums.push("FizzBuzz");
    } else if(i % buzzVal === 0){
      nums.push("Buzz");
    } else if(i % fizzVal === 0){
      nums.push("Fizz");
    } else {
      nums.push(i);
    }
  }

  // return array
  return nums;
}
// calculate results - loop with switch statement
function fizzBuzzB(fizzVal, buzzVal) {

  let returnArray = [];
  let Fizz = false;
  let Buzz = false;

  for(let i = 1; i <= 100; i++){

    Fizz = i % fizzVal === 0;
    Buzz = i % buzzVal === 0;

    switch(true)
    {
      case Fizz && Buzz:
        returnArray.push("FizzBuzz");
        break;
      case Fizz:
        returnArray.push("Fizz");
        break;
      case Buzz:
        returnArray.push("Buzz")
        break;
      default:
        returnArray.push(i);
        break;
    }

  }

  return returnArray;

}
// calculate results - loop with ternary operators
function fizzBuzzC(fizzVal, buzzVal) {

  let returnArray = [];

  for(let i = 1; i <= 100; i++){
    let value = ((i % fizzVal === 0 ? 'Fizz' : '') + (i % buzzVal === 0 ? 'Buzz' : '') || i );
    returnArray.push(value);
  }

  return returnArray;

}

// loop over array and create a table row for each item
function displayResults(fbData) {

  // get the table body element from the page
  const tableBody = document.getElementById('results');

  // get the template row
  const templateRow = document.getElementById('fbTemplate');

  // clear table first
  tableBody.innerHTML = "";

  for(let i = 0; i < fbData.length; i += 5){

    // import template element from app.html as a document fragment (essentially make a copy of it)
    // true includes the node's descendants
    let tableRow = document.importNode(templateRow.content, true);
    // grab the td elements to put into an array
    let rowCols = tableRow.querySelectorAll('td');
    
    // set the class to the element in fbData 
    // if it is "Fizz", "Buzz", or "FizzBuzz", certain CSS rules to change the color and font-weight will be triggered.
    rowCols[0].classList.add(fbData[i]);
    rowCols[0].textContent = fbData[i];

    rowCols[1].classList.add(fbData[i + 1]);
    rowCols[1].textContent = fbData[i + 1];

    rowCols[2].classList.add(fbData[i + 2]);
    rowCols[2].textContent = fbData[i + 2];

    rowCols[3].classList.add(fbData[i + 3]);
    rowCols[3].textContent = fbData[i + 3];

    rowCols[4].classList.add(fbData[i + 4]);
    rowCols[4].textContent = fbData[i + 4];

    // add all the rows to the table
    tableBody.appendChild(tableRow);
  }

}

