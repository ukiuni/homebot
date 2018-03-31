var Slack = require("@slack/client").RTMClient;
var slack = new Slack(process.env.SLACK_TOKEN);
slack.start();
slack.on('message', (event) => {
  console.log("(channel:"+event.channel+"}) "+event.user+" says: "+event.text);
  slack.sendMessage('['+event.text+']って受信', event.channel).then((res) => {
    console.log('Message sent: ', res.ts);
  }).catch(console.error);
  if("ipを教えて"==event.text){
    slack.sendMessage('ipは'+require("ip").address()+"です。", event.channel)
  }
});
slack.on('error', (error => {
  console.log("error " + error);
}));



