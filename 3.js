const drawImage = (input) => {
  for (let i = 0; i < input; i++) {
    let baris = '';
    for (let j = 0; j < input; j++) {
      const tengah = Math.floor(input / 2);

      if (
        i === tengah ||
        j === tengah ||
        (i === 0 && j === 0) ||
        (i === 0 && j === input - 1) ||
        (i === input - 1 && j === 0) ||
        (i === input - 1 && j === input - 1)
      ) {
        baris += '* ';
      } else {
        baris += '# ';
      }
    }
    console.log(baris);
  }
};

drawImage(5);
