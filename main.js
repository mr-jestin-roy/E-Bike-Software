var ArduinoIotClient = require("@arduino/arduino-iot-client");
var client = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = client.authentications["oauth2"];
oauth2.accessToken = await getToken();

var api = new ArduinoIotClient.DevicesV2Api(client);
api.devicesV2List().then(
  (devices) => {
    console.log(devices);
  },
  (error) => {
    console.log(error);
  }
);

var rp = require("request-promise");

var options = {
  method: "POST",
  url: "https://api2.arduino.cc/iot/v1/clients/token",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  json: true,
  form: {
    grant_type: "client_credentials",
    client_id: "5QvnLgRYY106qp79m4QJiQtWiUrN4q9U",
    client_secret: "LlBXqwRK74BLmW9DKAZDcvamwRzW49l2OWkYpFtl00DdhbPGSLoRMStncAvrqi7R",
    audience: "https://api2.arduino.cc/iot",
  },
};

try {
  const response = await rp(options);
  console.log("Access token: " + response["access_token"]);
} catch (error) {
  console.error("Failed getting an access token: " + error);
}
