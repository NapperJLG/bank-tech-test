describe('account', function() {

  var account;

  beforeEach(function() {
    account = new Account();
  });

  describe('account creation', function() {

    it('creates an account with a balance of 0', function() {
      expect(account.showBalance()).toEqual(0);
    });

    it('creates an account with an empty transaction history', function() {
      expect(account.accountStatement).toEqual([
        ['date', 'debit', 'credit', 'balance']
      ]);
    });

  });

  describe('processTransaction', function(){
    it('updates the balance to two decimal places', function(){
      credit = new Credit(100.50);
      account.processTransaction(credit);
      expect(account.balance).toEqual(100.50)
    });
  });

  describe('printStatement', function() {
    it('prints the column headers to the console', function() {
      expect(account.printStatement()).toEqual('date || debit || credit || balance')
    });


  });

  describe('addBalanceToTransactionDetails', function(){
    it('adds the updated balance to the latest transaction', function(){
      credit = new Credit(100);
      account.processTransaction(credit);
      expect(credit.transactionDetails).toEqual(['6/5/2019', ' || 100.00', '100.00'])
    });
  });

  describe('addTransactionDetailsToStatement', function(){
    it('adds transaction details to account statement', function(){
      credit = new Credit(100);
      account.processTransaction(credit);
      expect(account.accountStatement).toEqual([
        ['date', 'debit', 'credit', 'balance'],
        ['6/5/2019', ' || 100.00', '100.00']
        ])
    })


  });
});
