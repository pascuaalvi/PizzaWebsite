if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("Server initialization", function(){
      it("should insert products into the database after server start", function(){
        chai.assert(Products.find().count() > 0);
      });
    });
  });
}
