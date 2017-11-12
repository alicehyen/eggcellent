// 1. Text strings =====================================================================================================
//    Modify these strings and messages to change the behavior of your Lambda function

var languageStrings = {
    'en': {
        'translation': {
            'WELCOME' : "<s>Hi there!</s><s> Welcome to our <say-as interpret-as='interjection'>Egg</say-as> Cellent guide to eggs!</s>",
            'HELP'    : "Say <say-as interpret-as='interjection'>About</say-as>, to hear more about the eggs we help you make!",
            'ABOUT'   : "<s>Egg Cellent helps guide you through your egg-making, including hard-boiled, <prosody pitch='low'>soft-boiled</prosody>, sunny side up, <prosody pitch='x-low'>poached</prosody>, over easy, <prosody pitch='low'>over medium</prosody>, over hard fried, and <prosody pitch='low'>scrambled eggs</prosody>. </s><s>We are <say-as interpret-as='interjection'>hard</say-as> to <say-as interpret-as='interjection'>beat</say-as>.</s><s>Now tell me, what kind of eggs would you like to make?</s>",
            'STOP'    : "<s> Ok, time to eggs it.</s><s> See you next <say-as interpret-as='interjection'> fry </say-as> day.</s><s> and have an <say-as interpret-as='interjection'>egg</say-as> straordinary day!</s>"
        }
    }
};

// 2. Skill Code =======================================================================================================

var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    // alexa.appId = 'amzn1.echo-sdk-ams.app.1234';
    ///alexa.dynamoDBTableName = 'YourTableName'; // creates new table for session.attributes
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        var say = this.t('WELCOME') + ' ' + this.t('HELP');
        this.emit(':ask', say, say);
    },

    'AboutIntent': function () {
        this.emit(':ask', this.t('ABOUT'));
    },
    
    'EggIntent': function () {
        var say = 'I am yolking my brain to find some eggs to crack';
        
         var EggName = '';
        if (this.event.request.intent.slots.Egg.value) {
            EggName = this.event.request.intent.slots.Egg.value;
        }
        switch(EggName) {
        case 'poached':
        case 'poach':
        case 'poached egg':
        case 'poached eggs':
          say = '<prosody pitch="x-low"><s>At Excellent, we poach eggs by first heating a pot of water just shy of a rolling point. </s><s> Add a dash of vinegar if you have it.</s><s> Swirl the water in your pan to create a whirlpool, and then carefully drop the egg into the center.</s><s> Continue swirling around the egg for <emphasis level = "strong">five</emphasis> minutes and then lift egg out with a slotted spoon.</s><s>There you have it, now you have poached eggs!</s><s>What other eggs would you like to make?</s></prosody>';
          break;
        case 'over hard':
        case 'over hard egg':
        case 'over hard eggs':
        case 'fried egg':
        case 'fried eggs':
        case 'fried':
        case 'fry':
          say = '<prosody pitch="x-low"><s>At Excellent, we fry over hard eggs by first cracking one <say-as interpret-as="interjection">straight</say-as> into our greased pan on medium heat.</s><s> Fry the egg until the edges brown. </s><s>Poke the yolk, and flip the egg after the first side is fully cooked.</s><s> Then fry the other side until the whites and the yolk are completely cooked. </s><s>Be careful to keep the yolk in place!</s><s>There you have it, now you have some <say-as interpret-as="interjection">egg</say-as> ceptional eggs!</s><s>What other eggs would you like to make?</s></prosody>';
          break;
        case 'over medium':
        case 'over medium egg':
        case 'over medium eggs':
        case 'medium':
          say = '<prosody pitch="x-low"><s>At Excellent, we cook our over medium eggs by first cracking an egg directly into our greased pan on medium heat.</s><s> Fry the egg until the edges brown and then flip gently. </s><s>Fry until the edges brown slightly on this second side so that there is a thicker film on your yolk but the inside is still runny.</s><s> Be careful to keep the yolk in place! </s><s>And there you have it, get egg cited for some delicious over medium eggs!</s><s>Are you cracking up yet?</s><s>What other eggs would you like to make?</s></prosody>';
          break;
        case 'over easy':
        case 'runny':
        case 'runny egg':
        case 'runny eggs':
        case 'easy':
        case 'over easy egg':
        case 'over easy eggs':
          say = '<prosody pitch="x-low"><s>At Excellent, we make runny over easy eggs by first cracking an egg directly into our greased pan on medium heat.  </s><s>Then fry it until the edges brown and flip.  </s><s>Be careful to keep the yolk in place, and only cook for a short time so it stays runny! </s><s>There you have it, a delectable runny egg. </s><s>So delicious. </s><s>You know, </s><s> this would really pair well with an open-faced avocado toast sandwich. </s><s><emphasis level="strong">Mmmmm</emphasis> tasty</s><s>What other eggs would you like to make?</s></prosody>';
          break;
        case 'sunny side up':
        case 'sunny side up egg':
        case 'sunny side up eggs':
        case 'sunny':
          say = '<prosody pitch="x-low"><s>At Excellent, we make our sunny side up eggs by cracking an egg directly into our greased pan on medium heat.  </s><s>Then fry it until the edges brown without flipping. </s><s>Remove from your pan when you are ready to enjoy.</s><s>There you have it, sunny side up eggs for a sunny or not-so-sunny day! </s><s>Time to toast some bread to top it all off!</s><s>What other eggs would you like to make?</s></prosody>';
          break;
        case 'scrambled':
        case 'scrambled eggs':
        case 'scramble':
          say = '<prosody pitch="x-low"><s>At Excellent, we make our scrambled eggs by first cracking a couple eggs and mixing the whites and yolks together in a bowl.  </s><s>If you want, mix in a dash of milk. </s><s>Add oil to your stove pan set on medium-high, and pour the eggs in, folding them repeatedly for four to five minutes while they cook.  </s><s>Add salt and pepper and some cheddar cheese while you are at it. </s><s>There you have it, some tasty scrambled eggs! </s><s>Remember to add some hot sauce if you are feeling spicy!</s><s>What other eggs would you like to make?</s></prosody>';
          break;
        case 'soft boiled':
        case 'soft-boiled':
        case 'soft-boil':
        case 'soft boiled egg':
        case 'soft boiled eggs':
        case 'soft boil':
        case 'soft-boiled egg':
        case 'soft-boiled eggs':
          say = '<prosody pitch="x-low"><s>At Excellent, we make soft boiled eggs by first boiling a pot of water. </s><s> Drop the eggs in and wait six minutes.  </s><s>Afterward, drop the eggs in an ice water bath for easier peeling. </s><s>There you have it, soft boiled eggs!  </s><s>You know, </s><s> this egg would be extra tasty in some ramen. </s><s>What other eggs would you like to make?</s></prosody>';
          break;
        case 'hard boiled':
        case 'boil':
        case 'hard boiled eggs':
        case 'hard boiled egg':
        case 'hard boil':
        case 'hard-boiled egg':
        case 'hard-boiled eggs':
          say = '<prosody pitch="x-low"><s>At Excellent, we make hard boiled eggs by first boiling a pot of water. </s><s>Drop the eggs in and wait ten to twelve minutes.  </s><s>Afterward, drop the eggs in an ice water bath for easier peeling. </s><s>There you have it, some hard boiled eggs!</s><s>What other eggs would you like to make?</s></prosody>';
          break;
          
          default:
          say = ' <s>Hmmm </s><s><prosody pitch="high">Maybe your voice cracked?</prosody></s><s>Or was it the egg?</s><s>I did not quite get exactly what you said.</s><prosody pitch="high"><s>What type of eggs did you want again?</s></prosody>';
        }
        
        this.emit(':ask', say);
    },

    'AMAZON.NoIntent': function () {
        this.emit('AMAZON.StopIntent');
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', this.t('HELP'));
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP'));
    }
    };
