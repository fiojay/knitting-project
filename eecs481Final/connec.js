var com = require('serialport')// include the library
var servi = require('servi');

var app = new servi(false); // servi instance
app.port(8080);             // port number to run the server on
 
// configure the server's behavior:
app.serveFiles("public");     // serve static HTML from public folder
//app.serveFiles("files");
app.route('/data', sendData); // route requests for /data to sendData()
// now that everything is configured, start the server:
app.start();


var myPort = new com.SerialPort("/dev/cu.usbmodem1a121", {
    baudrate: 9600,
    parser: com.parsers.readline('\r\n')
});

myPort.on('open', showPortOpen);
myPort.on('data', saveLatestData);
myPort.on('close', showPortClose);
myPort.on('error', showError);

function showPortOpen() {
   console.log('port open. Data rate: ' + myPort.options.baudRate);
}



function sendData(request) {
// print out the fact that a client HTTP request came in to the server:
// console.log("Got a client request, sending them the data.");
// respond to the client request with the latest serial string:

  request.respond(latestData);

}

var latestData = 0;
var time;
function saveLatestData(data) {
  
  time = Date.now();
  latestData = data +" "+time ;
 // console.log(latestData);

}
 
function showPortClose() {
   console.log('port closed.');
}
 
function showError(error) {
   console.log('Serial port error: ' + error);
}



