const loveBird = () => {
  let lovebird = 6969;
  const jumlahMenetas = 441 / 21;

  for (let i = 1; i <= jumlahMenetas; i++) {
    lovebird -= lovebird * (11.1 / 100);
    console.log(
      `hari ke: ${i * jumlahMenetas}, lovebird hidup: ${Math.ceil(lovebird)}`
    );

    lovebird *= 3 / 2;
    console.log(
      `hari ke: ${i * jumlahMenetas}, lovebird hidup + anaknya: ${Math.ceil(
        lovebird
      )}`
    );
  }
};

loveBird();
