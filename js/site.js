
function getValues() {
  // get values from the page

  let fizzVal = parseInt(document.getElementById('fizz').value);
  let buzzVal = parseInt(document.getElementById('buzz').value);

  // call fizzBizz function to calculate results
  if(Number.isInteger(fizzVal) && Number.isInteger(buzzVal)) {
    const fizzBuzzArray = fizzBuzz(fizzVal, buzzVal);

    // display results
    displayResults(fizzBuzzArray);
  } else {
    alert("You must enter integers");
  }

}

// calculate results - loop with ternary operators
function fizzBuzz(fizzVal, buzzVal) {
  let returnArray = [];
  // loop from 1 through 100 and push the appropriate value (Fizz, Buzz, FizzBuzz, or i if neither) to the array
  for(let i = 1; i <= 100; i++){
    let value = ((i % fizzVal === 0 ? 'Fizz' : '') + (i % buzzVal === 0 ? 'Buzz' : '') || i );
    returnArray.push(value);
  }
  // return the results
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
  // loop through elements of fizz buzz data array
  for(let i = 0; i < fbData.length; i += 5){
    // import template element from app.html as a document fragment (essentially make a copy of it)
    // true includes the node's descendants
    let tableRow = document.importNode(templateRow.content, true);
    // grab the td elements to put into an array
    let rowCols = tableRow.querySelectorAll('td');
    // set the class to the element in fbData 
    // if it is "Fizz", "Buzz", or "FizzBuzz", certain CSS rules to change the color and font-weight will be triggered.
    // cell 1
    rowCols[0].classList.add(fbData[i]);
    rowCols[0].textContent = fbData[i];
    // cell 2
    rowCols[1].classList.add(fbData[i + 1]);
    rowCols[1].textContent = fbData[i + 1];
    // cell 3
    rowCols[2].classList.add(fbData[i + 2]);
    rowCols[2].textContent = fbData[i + 2];
    // cell 4
    rowCols[3].classList.add(fbData[i + 3]);
    rowCols[3].textContent = fbData[i + 3];
    // cell 5
    rowCols[4].classList.add(fbData[i + 4]);
    rowCols[4].textContent = fbData[i + 4];
    // add all the rows to the table
    tableBody.appendChild(tableRow);
  }
}

