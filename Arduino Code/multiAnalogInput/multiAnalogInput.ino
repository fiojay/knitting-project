/*
  Analog Input Demonstrates analog input by reading an analog sensor on analog pin 0 and
 turning on and off a light emitting diode(LED)  connected to digital pin 13. 
 The amount of time the LED will be on and off depends on
 the value obtained by analogRead(). 
 
 The circuit:
 * Potentiometer attached to analog input 0
 * center pin of the potentiometer to the analog pin
 * one side pin (either one) to ground
 * the other side pin to +5V
 * LED anode (long leg) attached to digital output 13
 * LED cathode (short leg) attached to ground
 
 * Note: because most Arduinos have a built-in LED attached 
 to pin 13 on the board, the LED is optional.
 
 
 Created by David Cuartielles
 modified 30 Aug 2011
 By Tom Igoe
 
 This example code is in the public domain.
 
 http://arduino.cc/en/Tutorial/AnalogInput
 
 */

int sensorPin = A0;    
int sensorPin2 = A3;  
int sensorPin3 = A5;  

int ledPin = 13;      // select the pin for the LED
int sensorValue = 0;  //sensor value for front textile to measure light touch
int sensorValue2 = 0; //sensor value for back textile to measure push
int sensorValue3 = 0; //sensor value for adult portion to change letter 

void setup() {
  // declare the ledPin as an OUTPUT:
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT); 
}

void loop() {
  // read the value from the sensor:
  sensorValue = analogRead(sensorPin); 
  
  
  // turn the ledPin on
  digitalWrite(ledPin, HIGH);  
  // stop the program for <sensorValue> milliseconds:
  //delay(sensorValue);  
//delay(sensorValue2);   
  // turn the ledPin off:        
  digitalWrite(ledPin, LOW);   
  // stop the program for for <sensorValue> milliseconds:
  //delay(sensorValue);  
  //delay(sensorValue2);
  
//  Serial.print("sketch uploaded");
 
  if (sensorValue > 1) { 
    Serial.print("AraTouch is: "); 
    Serial.println(sensorValue, DEC);
   delay(2);
  }
    
   sensorValue2 = analogRead(sensorPin2);
   if(sensorValue2 > 1) { 
   Serial.print("AraPush: "); 
   Serial.println(sensorValue2, DEC);
   delay(2);
  } 
  
   sensorValue3 = analogRead(sensorPin3);
   if(sensorValue3 > 1) { 
   Serial.print("AdultTouch is: "); 
   Serial.println(sensorValue3, DEC);
   delay(2);
   }
}

