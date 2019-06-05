var Account = function(){
    this.balance = 0
    this.accountStatement = [['date', 'debit', 'credit', 'balance']]
};

Account.prototype = {

  showBalance: function(){
    return this.balance;
  },

  processTransaction: function(transaction){
    this.balance += parseInt(transaction.amount);
    this.addBalanceToTransactionDetails(transaction);
  },

  printStatement: function(){
    return this.accountStatement[0].join(' || ')
  },

  addBalanceToTransactionDetails: function(transaction){
    transaction.transactionDetails.push(this.balance.toFixed(2))
  }

};
