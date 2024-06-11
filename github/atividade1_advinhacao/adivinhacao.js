let aleatorio = Math.floor(Math.random() * 101) + 100;
console.log("Advinhe em número (tem 3 tentativas)");
let tentativas = 3;
let num_tentativas = 0;
let advinhar = "";
process.stdin.on("data", function (data) {
  advinhar = data.toString().trim();
  if (advinhar == aleatorio) {
    console.log("Acertou :)");
    process.exit();
  } else {
    num_tentativas++;
    if (num_tentativas == 0) {
      console.log("Acabaram suas tentativas");
    }
    tentativas--;
    console.log("Tente novemente! Mais " + tentativas + " tentativas");
  }
  if (advinhar >= aleatorio + 3 || advinhar <= aleatorio - 3) {
    console.log("Frio");
  } else {
    console.log("Quente!");
  }
  if (tentativas <= 0) {
    console.log(
      "Acabaram suas tentativas! O número era " +
        aleatorio +
        " outro número aleatório foi gerado! Tente novamente. "
    );
    tentativas = 3;
    aleatorio = Math.floor(Math.random() * 100);
  }
});
