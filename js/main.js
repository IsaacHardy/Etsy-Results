(function () {

  var firstItem = drink.results[0];

  var templateString = $('#itemTemplate').text();

  var templateFunction = _.template(templateString);

  var itemHTML = templateFunction(firstItem);
  $('.container').html(itemHTML);

}());