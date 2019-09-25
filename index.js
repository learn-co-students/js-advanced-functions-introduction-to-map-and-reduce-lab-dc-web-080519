// Your code here
function mapToNegativize(sourceArray) {
  let newArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArray.push(sourceArray[i]*-1)
  }
  return newArray
}

function mapToNoChange(sourceArray) {
  let newArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArray.push(sourceArray[i])
  }
  return newArray
}

function mapToDouble(sourceArray) {
  let newArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArray.push(sourceArray[i]*2)
  }
  return newArray
}

function mapToSquare(sourceArray) {
  let newArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArray.push(sourceArray[i]**2)
  }
  return newArray
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let memo = 0;

  for (let i = 0; i < sourceArray.length; i++) {
    memo += sourceArray[i]
  }
  return memo+startingPoint;
}

function reduceToAllTrue(sourceArray) {
  let memo;
  for (let i = 0; i < sourceArray.length; i++) {
    if (Boolean(sourceArray[i])) {
      memo = true
    }
    else {
      return false
    }
  }
  return memo
}

function reduceToAnyTrue(sourceArray) {
  let memo;
  for (let i = 0; i < sourceArray.length; i++) {
    if (Boolean(sourceArray[i])) {
      return true;
    }
    else {
      memo = false
    }
  }
  return memo
}
