function chainTimers() {
  console.log("start");

  setTimeout(() => {
    console.log("1");

    setTimeout(() => {
      console.log("2");

      setTimeout(() => {
        console.log("3");
      }, 1500);
    }, 500);
  }, 2000);
  console.log("end");
}
chainTimers();
