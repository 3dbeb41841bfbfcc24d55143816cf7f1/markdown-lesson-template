function delayedGreeting(message, waitTime) {
  setTimeout(function() {
    console.log(message);
  }, waitTime);
}

delayedGreeting('callbacks are fun', 1000);
delayedGreeting('closures rock', 500);

console.log('Goodbye');
