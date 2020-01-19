"use strict";

//const { APIGatewayProxyEvent, Context } = require("aws-lambda") 
const { scrape } = require("./scrape");

//const Parser = require('rss-parser')
//let parser = new Parser()

module.exports.hello = async event => {
  console.log('hello')

  scrape()
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify(
  //     {
  //       message: "hello",
  //       input: event,
  //     },
  //     null,
  //     2
  //   ),
  // };
};
