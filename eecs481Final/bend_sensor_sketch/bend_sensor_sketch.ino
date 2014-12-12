   
 int fsrPin = 0; // the FSR and 10K pulldown are connected to a0
 int fsrReading; // the analog reading from the FSR resistor divider
 int sensorPin3 = A5;
 int sensorValue3 = 0;
    void setup(void) {
   
      Serial.begin(9600);
    }
    void loop(void) {
    fsrReading = analogRead(fsrPin);
     // the raw analog reading
    // We'll have a few threshholds, qualitatively determined
    if (fsrReading > 80) {
      Serial.print("NoPressure ");
      Serial.println(fsrReading,DEC);
    } 
    else if (fsrReading >= 70) {
      Serial.print("AraTouch ");
      Serial.println(fsrReading, DEC);
    } 
    else if (fsrReading < 50) {
      Serial.print("AraPushT ");
      Serial.println(fsrReading, DEC);
    } 
    
   delay(500);
    
   sensorValue3 = analogRead(sensorPin3);
   if(sensorValue3 > 100) { 
   Serial.print("AdultTouch "); 
   Serial.println(sensorValue3, DEC);
   delay(500);
   }
    
    
   
 } 
