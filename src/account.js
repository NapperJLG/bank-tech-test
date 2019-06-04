var Account = function(){
    this.balance = 0
    this.accountStatement = [['date', 'debit', 'credit', 'balance']]
};

Account.prototype = {

  showBalance: function(){
    return this.balance;
  },

  processTransaction: function(transaction){
    this.balance += transaction.amount;
  },

  printStatement: function(){
    return this.accountStatement[0].join(' || ')
  }



};
