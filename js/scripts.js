var CategoryExpenses = {
  purchases:  [],
  total: function() {
    var total = 0;
    this.purchases.forEach(function(purchase) {
      total += purchase.amount;
    });
    return total;
  }
};

var Purchase = {
  description: "", amount: 0
};

// $(document).ready(function() {
//   var categoryExpenses = Object.create(CategoryExpenses);
//   $("#add-category").click(function(event) {

//   });

//   $("form#add-purchase").submit(function(event) {
//     event.preventDefault();
//     var newPurchase = $("input#new-purchase").val();
//     var newAmount = parseFloat($("input#new-amount").val()).toFixed(2);
//     var purchase = Object.create(Purchase);
//     purchase.description = newPurchase;
//     purchase.amount = newAmount;

//   });

// });
