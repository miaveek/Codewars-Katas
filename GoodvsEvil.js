function goodVsEvil(good, evil) {
    const goods = [1, 2, 3, 3, 4, 10],
        evils = [1, 2, 2, 2, 3, 5, 10];
    let goodsArmy = good.split(' '), evilArmy = evil.split(' '), goodsPower = 0, evilPower = 0;
    goodsArmy.forEach((element, i) => {
        goodsPower += element * goods[i];
    });
    evilArmy.forEach((element, i) => {
        evilPower += element * evils[i];
    })
    if (goodsPower > evilPower) {
        return "Battle Result: Good triumphs over Evil";
    }
    else if (goodsPower == evilPower) {
        return "Battle Result: No victor on this battle field"
    }
    else {
        return "Battle Result: Evil eradicates all trace of Good";
    }
}
