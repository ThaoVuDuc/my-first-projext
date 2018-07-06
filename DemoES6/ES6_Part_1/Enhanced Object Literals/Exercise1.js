function getPrice(service) {
  var price = 50.0;

  return {
    service: service,

    _price: price,

    discount: function(rate) {
	if (rate <= 0 || rate > 1) {
	  throw new Error('Invalid discount rate');
	}

      this._price *= 1 - rate;
  },

    // YOUR_GETTER_FUNCTION_HERE
    
  };
}

var priceDetail = getPrice('EXPRESS');
priceDetail.discount(0.2);

console.log(priceDetail.price);
