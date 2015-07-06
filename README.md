# MRS-App Client Detector #

This simple JS script provides information about browser and user/client device to use with your mobile Apps.

It is suitable for Phonegap and Cordova.

## Compile
Make sure you have NodeJS and Grunt installed in your system.
Simply run:
```
$ npm install
$ grunt
```

## How to run
Include in your html header
```HTML
<script src="mrs-app-clientdetector.min.js"></script>
```

Then, use it using window.client!
```
$ window.client
	browser: "Chrome"
	browserVersion: "36.0.1985.143"
	cookies: true
	mobile: false
	os: "Windows"
	osVersion: "8.1"
	screen: "1366 x 768"
```

If you need to run again, just call
```
$ window.client.run()
```

## Full features
Available soon :)

Check our code to know more :)