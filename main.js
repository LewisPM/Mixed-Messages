const verbs1 = ['are', 'can', 'love'];
const adjs = ['beautiful', 'strong', 'smart', 'confident', 'bold', 'amazing', 'powerful'];
const verbs2 = ['win', 'do it', 'succeed'];

const runAffirmation = () => {
    let affirmation = ['You'];
    let randoNum = wordType => {
        return Math.floor(Math.random() * wordType.length);
    }
    let verb = verbs1[randoNum(verbs1)];
    //console.log(randoNum(adjs));
    if (verb === 'are') {
    affirmation.push(verb);
    affirmation.push(`${adjs[randoNum(adjs)]}!`);
    } else if (verb === 'can'){
    affirmation.push(verb);
    affirmation.push(`${verbs2[randoNum(verbs2)]}!`);
    } else if (verb === 'love') {
    affirmation.push(verb);
    affirmation.push('being you!');
    }
    console.log(affirmation.join(' '));
}

runAffirmation();