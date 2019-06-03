describe('feature tests', function(){

  var account;
  var credit;

  beforeEach(function() {
    account = new Account();
    credit = new Credit(500.00);
  });

  it('should adjust the balance when the account has been credited', function(){
    account.transaction(credit);

    expect(account.showBalance()).toEqual(500)
  });


});
