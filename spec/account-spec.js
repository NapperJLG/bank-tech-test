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

  describe('printStatement', function() {
    it('prints the column headers to the console', function() {
      expect(account.printStatement()).toEqual('date || debit || credit || balance')
    });
  });
});
