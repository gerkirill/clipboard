const clipboardy = require('clipboardy');
const googl = require('goo.gl');
googl.setKey('AIzaSyAzCO69nqkLyBKhuP5698g0oCfKADkgtK8');

setInterval(
  async () => {
    let content = clipboardy.readSync();
    if (content.startsWith('http')) {
      let shortened = await googl.shorten(content);
      clipboardy.writeSync(`лови ссылку ${shortened}`);
    }
  },
  600
);