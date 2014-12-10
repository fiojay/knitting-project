const int proximityPin = 0;

int ledPins[] = {2,3,4,5,6,7,8,9};

void setup()
{
  
  int index;

  for(index = 0; index <= 7; index++)
  {
    pinMode(ledPins[index],OUTPUT);
  }
  Serial.begin(9600);
}


void loop()
{
  
    
  float voltage;
  voltage = analogRead(proximityPin);
  Serial.println(voltage);
  
  if(voltage > 150){
    digitalWrite(ledPins[0], HIGH);  //Turns on LED #0 (pin 2)
    digitalWrite(ledPins[1], HIGH);
  }
  else {
    digitalWrite(ledPins[0], LOW);  //Turns on LED #0 (pin 2)
    digitalWrite(ledPins[1], LOW);
  }
  
  if (voltage > 300){
    digitalWrite(ledPins[2], HIGH);  //Turns on LED #1 (pin 3)
    digitalWrite(ledPins[3], HIGH);  //Turns on LED #1 (pin 3)
  }
  else{
    digitalWrite(ledPins[2], LOW);  //Turns on LED #1 (pin 3)  
    digitalWrite(ledPins[3], LOW);  //Turns on LED #2 (pin 4)
  }
   if (voltage > 400){
    digitalWrite(ledPins[4], HIGH);  //Turns on LED #1 (pin 3)
    digitalWrite(ledPins[5], HIGH);  //Turns on LED #1 (pin 3)
  }
  else{
    digitalWrite(ledPins[4], LOW);  //Turns on LED #1 (pin 3)  
    digitalWrite(ledPins[5], LOW);  //Turns on LED #2 (pin 4)
  }
   if (voltage > 500){
    digitalWrite(ledPins[6], HIGH);  //Turns on LED #1 (pin 3)
    digitalWrite(ledPins[7], HIGH);  //Turns on LED #1 (pin 3)
  }
  else{
    digitalWrite(ledPins[6], LOW);  //Turns on LED #1 (pin 3)  
    digitalWrite(ledPins[7], LOW);  //Turns on LED #2 (pin 4)
  }
  delay(500); // repeat once per second (change as you wish!)
}




