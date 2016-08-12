#!/usr/bin/env node
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var myArgs = process.argv.slice(2);

if (myArgs.length < 3) {
  console.log("Usage: Host Username Password");
  process.exit(1);
};

var http = require("https");

var options = {
  "method": "POST",
  "hostname": myArgs[0],
  "port": null,
  "path": "/mgmt/shared/authn/login",
  "headers": {
    "content-type": "application/json",
    "cache-control": "no-cache"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({ username: myArgs[1],
  password: myArgs[2],
  loginProvidername: 'tmos' }));
req.end();
