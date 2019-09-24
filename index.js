function mapToNegativize(sourceArray) {
  let newArray = [];
  for(const num of sourceArray){
    newArray.push(num * -1)
  }
  return newArray;
}


function mapToNoChange(sourceArray) {
  return sourceArray;
}

function mapToDouble(sourceArray) {
  let newArray = [];
  for(const num of sourceArray){
    newArray.push(num * 2)
  }
  return newArray;
}


function mapToSquare(sourceArray) {
  let newArray = [];
  for(const num of sourceArray){
    newArray.push(num ** 2)
  }
  return newArray;
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let memo = startingPoint
  for(const num of sourceArray) {
    memo += num
  }
  return memo;
}

function reduceToAllTrue(sourceArray) {
  let memo = true
  for(const member of sourceArray) {
    member ? undefined : memo = false
  }
  return memo;
}

function reduceToAnyTrue(sourceArray) {
  let memo = false
  for(const member of sourceArray) {
    member ? memo = true : undefined
  }
  return memo;
}