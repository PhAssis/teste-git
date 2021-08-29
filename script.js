function PDFGeneratorgetHeight() {
  let bodyHeight = document.body.scrollHeight;

  const getValue = (v1, v2) => (value) => value >= v1 && value < v2;

  let verifySizeApostila = [
    [(value) => value >= 300000, Math.floor(((bodyHeight / 96) * 72) / 100)],
    [getValue(150000, 300000), Math.floor(((bodyHeight / 48) * 72) / 100)],
    [getValue(50000, 150000), Math.floor((bodyHeight * 450) / 10000)],
    [getValue(10000, 50000), Math.floor((bodyHeight * 450) / 5000)],
    [(value) => value < 10000, Math.floor((bodyHeight * 450) / 1000)],
  ];
  const [, result] = verifySizeApostila.find((x) => x[0](bodyHeight));
  return result;
}

//commit 1