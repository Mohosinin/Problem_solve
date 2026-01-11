function pingPongBuilder() {
  for (let i = 1; i <= 20; i++) {
    let output = "";
    if (i % 3 === 0) {
      output += "Ping";
    }
    if (i % 5 === 0) {
      output += "Pong";
    }

    if (output === "") {
      console.log(i);
    } else {
      console.log(output);
    }
  }
}

pingPongBuilder();