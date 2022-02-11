
// get values from the page
function getValues()  {
  const startVal = document.getElementById('startValue').value;
  const endVal = document.getElementById('endValue').value;

  // call calculateResults
  const results = calculateResults(startVal, endVal);
  // call display results
  displayResults(results);
}

// calculate results
function calculateResults(startVal, endVal) {
  const nums = [];

  for(let i = startVal; i < endVal; i++){

    if(i % 5 === 0 && i % 3 === 0){
      nums.push("FizzBuzz");
    } else if(i % 5 === 0){
      nums.push("Buzz");
    } else if(i % 3 === 0){
      nums.push("Fizz");
    } else {
      nums.push(i);
    }

  }

  return nums;
}

// display results
function displayResults(nums) {

  let templateRows = "";
  let templateData = "";
  let count = 1;

  for(let i = 0; i <= Math.ceil(nums.length / 5); i++){

    for(let j = 0; j < 5; j++){
      // let slicedArr = nums.slice(0, 4)
      templateData += `<td>${nums[j]}</td>`;
    }

    templateRows += `<tr>${templateData}</tr><br>`;
    templateData = "";
    nums = nums.slice(count += 4);

  }

  document.getElementById('results').innerHTML = templateRows;

}

