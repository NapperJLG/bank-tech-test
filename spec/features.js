describe('feature tests', function(){

  var account;
  var credit;

  beforeEach(function() {
    account = new Account();
    credit = new Credit(500);
    debit = new Debit(300)
  });

  it('should adjust the balance when the account has been credited', function(){
    account.processTransaction(credit);

    expect(account.showBalance()).toEqual(500.00)
  });

  it('should adjust the balance when the account has been debited', function(){
    account.processTransaction(debit);

    expect(account.showBalance()).toEqual(-300.00)
  });

  it('should print out the statement of previous transactions in a table format', function(){
    account.processTransaction(credit);
    expect(account.printStatement()).toEqual(
      'date || debit || credit || balance 6/5/2019 || || 100.00 || 100.00')
  });




});
