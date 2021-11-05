interface ATM {
  obj: MoneyObject;
  proportions: [number, number, number, number, number, number, number];
}
interface MoneyObject {
  [key: string]: number;
}

class ATM implements ATM {
  constructor(moneyObject: MoneyObject) {
    this.obj = {};
    let summ = 0;
    for (let key in moneyObject) {
      this.obj[key] = moneyObject[key];
      summ += Number(moneyObject[key]);
    }
    
    this.proportions = [
      this.obj['5000'] / summ,
      this.obj['2000'] / summ,
      this.obj['1000'] / summ,
      this.obj['500'] / summ,
      this.obj['200'] / summ,
      this.obj['100'] / summ,
      this.obj['50'] / summ,
    ];
  }
  _setProportions() {
    let summ = 0;
    for (let key in this.obj) {
      summ += Number(this.obj[key]);
    }
    this.proportions = [
      this.obj['5000'] / summ,
      this.obj['2000'] / summ,
      this.obj['1000'] / summ,
      this.obj['500'] / summ,
      this.obj['200'] / summ,
      this.obj['100'] / summ,
      this.obj['50'] / summ,
    ];
    return summ;
  }

  billMap = ['5000', '2000', '1000', '500', '200', '100', '50'];
  _getProportionalBill(rnd: number, summ: number) {
    let checker = 0;
    for (let i = 0; i < this.proportions.length; i++) {
      checker += this.proportions[i];

      if (
        checker >= rnd &&
        Number(this.billMap[i]) <= summ &&
        this.obj[this.billMap[i]] > 0
      ) {
        return this.billMap[i];
        break;
      }
    }
  }
  getMoney(summ: string | number) {
    
    let currentSum = Number(summ);
    if (currentSum % 50 !== 0) {
      throw new Error('Неверная сумма');
    }
    const objClone: MoneyObject = {};
    for (let key in this.obj) {
      objClone[key] = this.obj[key];
    }
    

    while (currentSum > 0) {
      const rnd = Math.random();
      const bill = this._getProportionalBill(rnd, currentSum);
      currentSum -= Number(bill);

      if (bill) {
        this.obj[bill] -= 1;
      }
      const lastBills = this._setProportions();
      if (!lastBills) {
        throw new Error('В банкомате недостаточно средств');
      }
    }
    
    return this.obj;
  }

  getAtmBalance() {
    return this.obj;
  }
  setAtmBalance(moneyObj: MoneyObject) {
    for (let key in this.obj) {
      this.obj[key] = this.obj[key] + moneyObj[key];
    }
  }
}

// console.log(newATM.getAtmBalance());
// console.log(newATM.getMoney('6092000'));
// console.log(newATM.proportions);
// console.log(newATM.getAtmBalance());

export default new ATM({
  50: 0,
  100: 0,
  200: 0,
  500: 0,
  1000: 0,
  2000: 0,
  5000: 0,
});
