function zeros (n) {
  let zerosIn = 0;
    for (let i = 5; Math.floor(n / i) >= 1; i *= 5)
        zerosIn += Math.floor(n / i);
    return zerosIn;  
}
