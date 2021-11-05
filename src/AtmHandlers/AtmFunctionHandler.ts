interface MoneyObject {
  [key: string]: number;
}

function _getProportionalBill(
  rnd: number,
  summ: number,
  proportions: number[] ,
  billMap: string[],
  obj: MoneyObject
) {
  let checker = 0;
  for (let i = 0; i < proportions.length; i++) {
    checker += proportions[i];

    if (
      checker >= rnd &&
      Number(billMap[i]) <= summ &&
      obj[billMap[i]] > 0
    ) {
      return billMap[i];
      break;
    }
  }
}

function _setProportions(obj:MoneyObject) {
  let summ = 0;
  for (let key in obj) {
    summ += Number(obj[key]);
  }
  const proportions = [
    obj['5000'] / summ,
    obj['2000'] / summ,
    obj['1000'] / summ,
    obj['500'] / summ,
    obj['200'] / summ,
    obj['100'] / summ,
    obj['50'] / summ,
  ];
  return  proportions;
}

function getMoney(summ: string | number, obj: MoneyObject) {
  let summP = 0;
  for (let key in obj) {
    summP += Number(obj[key]);
  }
  const billMap = ['5000', '2000', '1000', '500', '200', '100', '50'];
  let proportions = [
    obj['5000'] / summP,
    obj['2000'] / summP,
    obj['1000'] / summP,
    obj['500'] / summP,
    obj['200'] / summP,
    obj['100'] / summP,
    obj['50'] / summP,
  ];

  let currentSum = Number(summ);
  if (currentSum % 50 !== 0) {
    throw new Error('Неверная сумма');
  }
  const objClone: MoneyObject = {};
  for (let key in obj) {
    objClone[key] = obj[key];
  }

  while (currentSum > 0) {
    const rnd = Math.random();
    const bill = _getProportionalBill(rnd, currentSum,proportions,billMap,obj);
    currentSum -= Number(bill);

    if (bill) {
      obj[bill] -= 1;
    }
    proportions = _setProportions(obj);
    let summ = 0
    for (let i = 0; i < proportions.length; i ++) {
      summ += proportions[i];
    }
    if (!summ) {
      throw new Error('В банкомате недостаточно средств');
    }
  }

  return obj;
}

export default getMoney;
