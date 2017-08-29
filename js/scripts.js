var myArray = [1, 30, 403,];
myArray.reduce(add, 0); // Sum the total of My array

function attendee(name) {
    this.name = name;

}

function item(itemName, costOfItem) {
	this.itemName = itemName;
	this.costOfItem = costOfItem;
}


function add(a, b) {
    return a + b;

}
