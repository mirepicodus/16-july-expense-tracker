var CategoryExpenses = {
  purchaseAmounts: [0],
  initialize: function() {
    this.purchases = [];
  },
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

var loadList = function(currentCategory) {
  $('tbody#purchases-list').empty();
  $('#category-title').text(currentCategory.category);
  currentCategory.purchases.forEach( function(purchase) {
    $('tbody#purchases-list').prepend("<tr><td>" + purchase.description + "</td><td>" + purchase.amount + "</td></tr>")
  });
  $('#total').text(currentCategory.total());
};

var calculateGrandTotal = function (amounts) {
  var total = 0;
  amounts.forEach(function(amount) {
    total += amount;
  });
  return total;
};

$(document).ready(function() {
  var currentCategory;

  $("#add-category").click(function(event) {
    var newCategory = $('#new-category').val();
    $('#new-category').val("");
    var categoryExpenses = {};
    categoryExpenses = Object.create(CategoryExpenses);
    categoryExpenses.initialize();
    categoryExpenses.category = newCategory;
    currentCategory = categoryExpenses;
    $('ul#category-list').append("<li>" + categoryExpenses.category + "</li>");
    loadList(currentCategory);

    $('li').last().click(function() {
      currentCategory = categoryExpenses;
      loadList(currentCategory);
    });
  });

  $("form#add-purchase").submit(function(event) {
    event.preventDefault();
    var newPurchase = $("input#new-purchase").val();
    var newAmount = parseFloat($("input#new-amount").val());
    $(':input').val("");
    var purchase = Object.create(Purchase);
    purchase.description = newPurchase;
    purchase.amount = newAmount;
    currentCategory.purchaseAmounts.push(purchase.amount);
    currentCategory.purchases.push(purchase);
    $('tbody#purchases-list').prepend("<tr><td>" + purchase.description + "</td><td>" + purchase.amount + "</td></tr>");
    $('#total').text(currentCategory.total());
    $('#grand-total').text(calculateGrandTotal(currentCategory.purchaseAmounts));
  });

});
