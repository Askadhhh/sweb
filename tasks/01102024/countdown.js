function countdown(seconds) {
  count = seconds - 1;
  console.log(`осталось: ${seconds} секунд`);

  function task() {
    setTimeout(() => {
      if (count === 0) {
        return console.log("alarm");
      }
      console.log(`осталось: ${count} секунд`);
      count -= 1;
      task();
    }, 1000);
  }
  task();
}
countdown(5);
