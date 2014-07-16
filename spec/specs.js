describe("CategoryExpenses", function() {
  describe("total", function() {
    it("takes purchase amounts within a category and gives the total", function() {
      var testCategoryExpenses = Object.create(CategoryExpenses);
      var testPurchase1 = Object.create(Purchase);
      testPurchase1.description = "cat food";
      testPurchase1.amount = 15;
      testCategoryExpenses.purchases.push(testPurchase1);
      var testPurchase2 = Object.create(Purchase);
      testPurchase2.description = "dog food";
      testPurchase2.amount = 19;
      testCategoryExpenses.purchases.push(testPurchase2);
      testCategoryExpenses.total().should.equal(34);
    });
  });
});
