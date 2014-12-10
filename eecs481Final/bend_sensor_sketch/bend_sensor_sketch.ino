   
 int fsrPin = 0; // the FSR and 10K pulldown are connected to a0
 int fsrReading; // the analog reading from the FSR resistor divider
    void setup(void) {
   
      Serial.begin(9600);
    }
    void loop(void) {
    fsrReading = analogRead(fsrPin);
     // the raw analog reading
    // We'll have a few threshholds, qualitatively determined
    if (fsrReading > 480) {
      Serial.print("NoPressure ");
      Serial.println(fsrReading);
    } 
    else if (fsrReading >= 330) {
      Serial.print("AraTouch ");
      Serial.println(fsrReading);
    } 
    else if (fsrReading < 330) {
      Serial.print("AraPushT ");
      Serial.println(fsrReading);
    } 
    
    delay(1000);
 } 
