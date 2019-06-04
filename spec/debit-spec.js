describe('debit', function(){

  beforeEach(function(){
    debit = new Debit(200.50);
    today = new Date();
  });

  it('stores the amount being withdrawn from the account', function(){
    expect(debit.amount).toEqual('-200.50');
  });

  it('stores the date the debit was made', function(){
    expect(debit.debitDate).toEqual(new Date().toLocaleDateString("en-US"))
  });

  it('stores the details of a transaction in statement format', function(){
    expect(debit.transactionDetails).toEqual(['6/4/2019 || -200.50'])
  });

});
