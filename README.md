## Description

[Nest](https://github.com/nestjs/nest) framework educational project on using [Guards](https://docs.nestjs.com/guards).

This project showcases guards for detecting client browser to protect routes from being accessed from [Firefox](https://www.mozilla.org/en-US/firefox/) or [Chrome](https://www.google.com/chrome/) browsers.

It uses [Device Detector](https://www.npmjs.com/package/device-detector-js) library.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm start

# watch mode
$ nest start --watch
```

## Testing the app

- Go to http://localhost:3000/firefox from Chrome browser, you should get HTTP 403 response.
- Go to http://localhost:3000/chrome from Firefox browser, you should get HTTP 403 response.
- Go to http://localhost:3000/firefox from Firefox browser, you should get HTTP 200 response "Hello Firefox!"
- Go to http://localhost:3000/chrome from Firefox browser, you should get HTTP 200 response "Hello Chrome!".

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use it however you want.
