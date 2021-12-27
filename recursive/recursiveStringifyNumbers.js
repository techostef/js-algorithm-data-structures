function stringifyNumbers(obj) {
  let newObj = {};
  for(let key in obj) {
    newObj[key] = obj[key];
    if (typeof newObj[key] === 'number') {
      newObj[key] = '' + newObj[key];
    }
    else if (Array.isArray(newObj[key])) {
      newObj[key] = [...newObj[key]]
    }
    else if (typeof newObj[key] === 'object') {
      newObj[key] = stringifyNumbers(newObj[key])
    }
  }

  return newObj;
}


let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/