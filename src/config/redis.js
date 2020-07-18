const redis = require("redis");
const client = redis.createClient();

client.on("error", function (error) {
  console.error(error);
});

client.on("connect", function () {
  console.error("Connect to Redis");
});

module.exports = client;
