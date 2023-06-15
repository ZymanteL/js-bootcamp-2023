const myArr = [
    {id: 1, item: "Book"},
    {id: 5, item: "Skirt"},
    {id: 8, item: "Cup"},
    {id: 12, item: "Bag"},
    {id: 9, item: "Lamp"},
    {id: 4, item: "Cream"},
    {id: 3, item: "Bottle"},
    {id: 11, item: "Book"}
];

const customMapFunc = (array, callback) => {
    const answer = [];
    for (i = 0; i < array.length; i++) {
        answer.push(callback(array[i], i, array))
    }
    return answer;
}

const customFilterFunc = (array, callback) => {
    const answer = [];
    array.forEach((item, index) => {
      if (callback(item, index, array)) {
        answer.push(item);
      }
    });
    return answer;
  };

  const customEveryFunc = (array, callback) => {
    for (i = 0; i < array.length; i++) {
      if (!callback(array[i], i, array)) {
        return false;
      }
    }
    return true;
  };

  const customSomeFunc = (array, callback) => {
    for (i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return true;
      }
    }
    return false;
  };

  const customReduceFunc = (array, callback) => {
    let acc = array[0];
  
    for (i = 0; array.length > i; i++) {
      acc = callback(acc, array[i], i, array);
    }
  
    return acc;
  };  