var Diner = function (name){
	this.name = name;
	this.dishes = [];
	this.sum = 0;
	this.tax = 0;
	this.tip = 0;
}

Diner.prototype.addDishes = function (dishName,price){
	var dish = {
		dishName:dishName,
		price:price
	}
	this.dishes.push(dish)
}

Diner.prototype.totalDishesPrice = function (){
	for(var i = 0; i < this.dishes.length ;i ++){
		this.sum += this.dishes[i].price;
	}
}

Diner.prototype.taxCaculate = function (){
	this.tax = this.sum * 0.1;
}

Diner.prototype.tipCaculate = function (){
	this.tip = this.sum * 0.2;
}


var david = new Diner('david');
david.addDishes('steak',20);
david.addDishes('frenchfries',7);
david.totalDishesPrice();
david.taxCaculate();
david.tipCaculate()

var james = new Diner('james');
james.addDishes('steak',40);
james.addDishes('frenchfries',20);
james.totalDishesPrice();
james.taxCaculate();
james.tipCaculate();

var lily = new Diner('lily');
lily.addDishes('green salad',10);
lily.addDishes('roasted chicken',20);
lily.totalDishesPrice();
lily.taxCaculate();
lily.tipCaculate();

var bill = {
	diners:[],
	printTotal:function(){
		var totalPrice = 0;
		for(var i = 0; i < this.diners.length; i++){
			 totalPrice += this.diners[i].sum
		}
		console.log("Total Price is: ", totalPrice)
	},
	tipTotal:function(){
		var totalTip = 0;
		for(var i = 0; i < this.diners.length; i++){
			totalTip += this.diners[i].tip
		}
		console.log(totalTip)
	},
	taxTotal:function(){
		var totalTax = 0;
		for(var i = 0; i < this.diners.length; i++){
			totalTax += this.diners[i].tax
		}
		console.log(totalTax)
	}
}

bill.diners = [david, james, lily];
bill.printTotal();
bill.tipTotal();
bill.taxTotal()

console.log(bill)
