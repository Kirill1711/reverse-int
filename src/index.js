module.exports = function reverse (n) {
  let StringN = String(n);
  let ReversN = "";
  for (i = StringN.length-1; i>=0; i++);{
      ReversN += StringN[i];
  }
}
