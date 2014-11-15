var digitalMapping = {
	"0": 50,
	"1": 51,
	"2": 32,
	"3": 18,
	"4": 28,
	"5": 17,
	"6": 24,
	"7": 27,
	"8": 26,
	"9": 19,
	"10": 16,
	"11": 25,
	"12": 38,
	"13": 39,
}

exportGpio = function(gpio_nr, callback) {
	fs.writeFile('/sys/class/gpio/export', gpio_nr, fileOptions, function (err) {
		if (err) { 
			console.log("export error");
			console.log(err);
		}
		if(callback){
				callback();
			}
});
};

setGpioDirection = function(gpio_nr, direction, callback) {
	fs.writeFile("/sys/class/gpio/gpio" + gpio_nr + "/direction", direction, fileOptions, function (err) {
		if (err) { 
			// console.log("Could'd set gpio" + gpio_nr + " direction to " + direction + " - probably gpio not available via sysfs");
			console.log("direction error");
			console.log(err); 
		}
		callback();
	});
}

galileo.setGpioIn = function(gpio_map, callback) {
	setGpioDirection(gpio_map, 'in', callback);
}

galileo.setGpioOut = function(gpio_map, callback) {
	setGpioDirection(gpio_map, 'out', callback);
}

galileo.readGpio = function(gpio_nr, callback) {
	fs.readFile("/sys/class/gpio/gpio" + gpio_nr + "/value", fileOptions, function(err, data) {
		if (err) { console.log("Error reading gpio" + gpio_nr); }
		var value = data;
		callback(value);
	});
};

galileo.writeGpio = function(gpio_nr, value, callback) {

	if(value != 0 && value !=1){
		console.log("gpio write only supports binary values");
		return;
	}

	fs.writeFile("/sys/class/gpio/gpio" + gpio_nr + "/value", value, fileOptions, function(err, data) {
		if (err) { console.log("Writing " + gpio_nr + " " + value); }
		if (callback){ callback();}
	});
};
galileo.preparePin = function(gpio_map, direction, callback) {
	exportGpio(gpio_map, function(){
		if(direction){
			galileo.setGpioIn(gpio_map, callback);
		}else{
			galileo.setGpioOut(gpio_map, callback);
		}
	});
}
var led_pin = test.digitalMapping[0]; 

test.galileo.preparePin(led_pin,false,function(){
     test.galileo.writeGpio(led_pin, 1, function(){

     setInterval(function(){
		 	test.galileo.writeGpio(led_pin, 0);
	},2000);

     });
});
