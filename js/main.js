(function () {

  // var firstItem = drink.results[0];

  var templateString = $('#itemTemplate').text();

  var templateFunction = _.template(templateString);

  _.each(drink.results, function (item) {
    var itemHTML = templateFunction(item);
    $('.container').append(itemHTML);

  });

}());