/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let outputList = [];

  for (let i = 0; i < transactions.length; i++) {
    //get one transaction from the input array
    let transaction = transactions[i];

    //add category into the output list
    let checkCategory = false;

    //skip if outputList is empty.
    for (let j = 0; j < outputList.length; j++) {
      if (outputList[j].category == transaction.category) {
        //this transaction contain a exisiting category
        outputList[j].totalSpent += transaction.price;
        checkCategory = true;
        break;
      }
    }

    //if the outputList is empty or there is not matching category
    if (checkCategory == false) {
      outputList.push({
        category: transaction.category,
        totalSpent: transaction.price,
      })
    }

  }
  return outputList;
}

module.exports = calculateTotalSpentByCategory;
