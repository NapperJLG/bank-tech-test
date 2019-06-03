var Account = function(){
    this.balance = 0
};

Account.prototype = {

  showBalance: function(){
    return this.balance;
  },

  processTransaction: function(transaction){
    this.balance += transaction.amount
  }

};
