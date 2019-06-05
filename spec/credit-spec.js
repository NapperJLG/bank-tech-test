describe('credit', function(){

  beforeEach(function(){
    credit = new Credit(200.50);
    today = new Date();
  });

  it('stores the amount being credited to an account', function(){
    expect(credit.amount).toEqual('200.50');
  });

  it('stores the date the credit was made', function(){
    expect(credit.creditDate).toEqual(new Date().toLocaleDateString("en-US"))
  });

  it('stores the details of a transaction in statement format', function(){
    expect(credit.transactionDetails).toEqual(['6/5/2019', ' || ', '200.50'])
  });

});
