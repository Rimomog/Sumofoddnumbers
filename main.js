function rowSumOddNumbers(n) {
	// TODO
  let sum = 0;
//   calculates the sum from one to the input(n)
  for( let i = 0; i <= n; i++ ){
    sum += i;
  }
  let arrOfOddNumbers = []; // stores the odd numbers

//   multiplys the sum by 2 to get the range of numbers that the odd numbers are to be picked from,
//  then filters out the odd numbers and pushes the to the arrOfOddNumbers array
  for( let i = 1; i <= sum * 2; i += 2){
    arrOfOddNumbers.push(i)
  }
//   picks the specific row that needs to be added and returns the sum
  return arrOfOddNumbers.splice(-n,n).reduce( (sum, current) => sum += current, 0)
}