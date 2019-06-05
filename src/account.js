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
    this.addTransactionDetailsToStatement(transaction)
  },

  printStatement: function(){
    this.accountStatement.forEach(function(transaction){
      console.log(transaction.join(' || '));
      });

  },

  addBalanceToTransactionDetails: function(transaction){
    transaction.transactionDetails.push(this.balance.toFixed(2))
  },

  addTransactionDetailsToStatement: function(transaction){
    this.accountStatement.push(transaction.transactionDetails);
  }


};
