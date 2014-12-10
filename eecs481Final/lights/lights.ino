int ledPins[] = {2,3,4};

void setup()
{
  int index;

  for(index = 0; index <= 2; index++)
  {
    pinMode(ledPins[index],OUTPUT);
  }
}=


void loop()
{
  int delayTime = 100;
  digitalWrite(ledPins[0], HIGH);  //Turns on LED #0 (pin 2)
  delay(delayTime);                //wait delayTime milliseconds
  digitalWrite(ledPins[1], HIGH);  //Turns on LED #1 (pin 3)
  delay(delayTime);                //wait delayTime milliseconds
  digitalWrite(ledPins[2], HIGH);  //Turns on LED #2 (pin 4)
  delay(delayTime);                //wait delayTime milliseconds

}




