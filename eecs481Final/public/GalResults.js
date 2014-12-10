
/*
var com = require("serialport");

var serialPort = new com.SerialPort("/dev/cu.usbmodem1a121", {
    baudrate: 9600,
    parser: com.parsers.readline('\r\n')
  });

serialPort.on('open',function() {
  console.log('Port open');
});

serialPort.on('data', function(data) {
  console.log(data);
});



*/
console.log("here");
var serialListener = function()
{
	var receivedData = "";
	serialPort = new SerialPort("/dev/cu.usbmodem1a121", {
	    baudrate: 9600,
	    // defaults for Arduino serial communication
	     dataBits: 8, 
	     parity: 'none', 
	     stopBits: 1, 
	     flowControl: false 
	});
 serialPort.on('data', function(data) {
  console.log(data);
});

	/*serialPort.on("open", function () {
	  console.log('open serial communication');
         // Listens to incoming data
	    serialPort.on('data', function(data) { 
	         receivedData += data.toString();
		  if (receivedData .indexOf('E') >= 0 && receivedData .indexOf('B') >= 0) {
         // save the data between 'B' and 'E'
		   sendData = receivedData .substring(receivedData .indexOf('B') + 1, receivedData .indexOf('E'));
		   receivedData = '';
	     }
         // send the incoming data to browser with websockets.
	   socketServer.emit('update', sendData);
	  }); 

	});  */
}






