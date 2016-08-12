#!/usr/bin/env node
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var myArgs = process.argv.slice(2);

if (myArgs.length < 2) {
  console.log("Usage: Host Token");
  process.exit(1);
};

var http = require("https");

var options = {
  "method": "GET",
  "hostname": myArgs[0],
  "port": null,
  "path": "/mgmt/cm/cloud/tenant/templates/iapp/",
  "headers": {
    "x-f5-auth-token": myArgs[1],
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

req.end();
