function delayedMessage(text, ms) {
  setTimeout(() => {
    console.log(text);
  }, ms);
}
delayedMessage("asd", 1000);
delayedMessage("aasdsd", 2000);
delayedMessage("afdffsd", 3000);
