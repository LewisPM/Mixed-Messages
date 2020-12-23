const verbs1 = ['are', 'can'];
const adjs = ['beautiful', 'strong', 'smart', 'confident', 'bold', 'amazing', 'powerful'];
const nouns = ['winner', 'boss', 'genius', 'professional'];

const runAffirmation = () => {
    let affirmation = ['You'];
    let randoNum = wordType => {
        return Math.floor(Math.random() * wordType.length);
    }
    console.log(randoNum(adjs));
    affirmation.push(verbs1[randoNum(verbs1)]);
    affirmation.push(adjs[randoNum(adjs)]);
    return affirmation.join(' ');
}

runAffirmation();