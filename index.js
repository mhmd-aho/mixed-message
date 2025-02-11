let randomMessage =()=>{
    const signs = ["Aries","Taurus","Gemin","Cancer","Leo","Virgo","Libra","Scorpio"];
    let randomSign = signs[Math.floor(Math.random()* signs.length)]
    const qoutes = ["you will have a good day","you will have a bad day","you will get rich this year","you will die this year"];
    let randomQoute = qoutes[Math.floor(Math.random()*qoutes.length)];
    const advice = ["find God","stay positive","dont over react"];
    let randomAdvice = advice[Math.floor(Math.random()*advice.length)];
    let message = `if your sign is ${randomSign} ${randomQoute}, ${randomAdvice}`;
    console.log(message);
}
randomMessage()