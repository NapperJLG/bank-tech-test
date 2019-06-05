var Credit = function(amount){
  this.amount = amount.toFixed(2)
  this.creditDate = new Date().toLocaleDateString("en-US");
  this.transactionDetails = [this.creditDate, ' || ' + this.amount]
};
