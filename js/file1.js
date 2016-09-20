function delayedGreeting(message, waitTime) {
  setTimeout(function() {
    console.log(message);
  }, waitTime);
}

delayedGreeting('callbacks are fun', 2000);
delayedGreeting('closures rock', 1000);

console.log('Goodbye');
