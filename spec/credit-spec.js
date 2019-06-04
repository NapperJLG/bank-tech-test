describe('credit', function(){

  it('stores the amount being credited to an account', function(){
    credit = new Credit(200.00);
    expect(credit.amount).toEqual(200.00);
  });

});
