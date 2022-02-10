
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

  for(let i = startVal; i <= endVal; i++){

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

  let templateRow = "";
  let templateData = "";

  for(let i = 0; i < nums.length; i++){

    let number = nums[i];
    templateData += `<td>${number}</td>`;
    // templateRow += `<tr>${templateData}</tr>`;
  }



  document.getElementById('results').innerHTML = templateData;

}

