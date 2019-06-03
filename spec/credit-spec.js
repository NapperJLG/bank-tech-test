describe('credit', function(){

  var account;

  beforeEach(function(){
    account = new Account();
  });

  it('creates an account with a balance of 0', function(){
    expect(account.showBalance()).toEqual(0);
  })



});
