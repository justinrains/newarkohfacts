// arn:aws:lambda:us-east-1:338875363277:function:myNewarkOhioFacts

'use strict';

var Alexa = require('alexa-sdk');
var APP_ID = undefined;

var SKILL_NAME = 'Newark Ohio Facts';
var GET_FACT_MESSAGE = "Here is your Newark Ohio fact: ";
var HELP_MESSAGE = 'You can say tell me a Newark ohio fact, or, you can say stop...';
var HELP_REPROMPT = 'What can I help you with?';
var STOP_MESSAGE = 'Goodbye!';

var data = [
  'The Newark courthouse was built in 1876 and is regarded as one of the finest Second Empire-style courthouses in Ohio',
  'Newark was founded in 1802',
  'Longaberger, makers of American baskets boast the world\'s largest basket building in Newark',
  'Newark, Ohio, in Licking county, is 32 miles east of Columbus, Ohio',
  'Newark was first settled in by Europeans in 1802',
  'Samuel Elliott and Samuel Parr built the first houses in Newark',
  'The area was named after the city of Newark in New Jersey',
  'Ohio State University has a Newark Campus',
  'The estimated population of Newark was 49,134 at the 2016 census, which makes it the 20th largest city in Ohio',
  'the total land area of newark is 20.88 square miles',
  'Indigenous peoples lived along the river valleys for thousands of years before European contact.',
  'From more than two thousand years ago, 100 BC to 500 AD, people of the Hopewell culture transformed the area of Newark.',
  'The Newark Earthworks, designated a National Historic Landmark, have been preserved to document and interpret the area\'s significant ancient history.',
  'The earthworks cover several square miles.',
  'the Ohio Historical Society preserves the Great Circle Earthworks in a public park near downtown Newark, called Mound Builders Park (or the Newark Earthworks)',
  'The Heisey Glass Company started in Newark in 1895. The factory operated there for 62 years, until the company\'s demise in 1957 due to changing tastes.',
  'The National Heisey Glass Museum, operated by the Heisey Collectors of America, Inc., is located on Sixth Street in Newark.',
  'In 1909, The Arcade was opened. Modeled after innovative European buildings, it became one of Newark\'s first successful retail emporiums.',
  'the Arcade is one-third the size of an average modern Wal-Mart',
  'Holophane, founded in 1898, is one of the world\'s oldest manufacturers of lighting-related products.',
  'The main factory of Owens Corning Fiberglass is located in Newark.',
  'The main shopping center in the area is the Indian Mound Mall (located in nearby Heath)',
  'The indian mound mall is named after the world-famous Indian earthworks built 2,000 years ago by the Hopewell Indians of central Ohio',
  'Woody English, MLB player for Chicago Cubs is from Newark',
  'Wayne Newton, singer, actor, Las Vegas Strip entertainer was raised in Newark',
  'Jeff Uhlenhake, 12-year NFL pro with Miami Dolphins, Washington Redskins and New Orleans Saints is from Newark'
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};



{
  "intents": [
    {
      "intent": "GetNewFactIntent"
    },
    {
      "intent": "AMAZON.HelpIntent"
    },
    {
      "intent": "AMAZON.StopIntent"
    },
    {
      "intent": "AMAZON.CancelIntent"
    }
  ]
}
/*

http://bit.ly/jr4thfacts

GetNewFactIntent tell me a newark ohio fact
GetNewFactIntent give me a newark ohio fact
GetNewFactIntent I want a newark ohio fact

Alexa, open give me a newark ohio fact.
give me a newark ohio fact
i want a newark ohio fact
*/
