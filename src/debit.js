var Debit = function(amount){
  this.amount = (-amount).toFixed(2)
  this.debitDate = new Date().toLocaleDateString("en-US");
  this.transactionDetails = [this.debitDate + ' || ' + this.amount]
};
