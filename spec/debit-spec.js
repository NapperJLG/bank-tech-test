describe('debit', function(){

  it('stores the amount being debited from an account', function(){
    debit = new Debit(200.00);
    expect(debit.amount).toEqual(-200.00);
  });

});
