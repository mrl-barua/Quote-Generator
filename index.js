let btn =document.getElementById('btn');
let output = document.getElementById('output')
let quotes = [
'"The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela"',
'"The way to get started is to quit talking and begin doing. -Walt Disney"',
'"If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt"',
'"The world isn’t perfect. But it’s there for us, doing the best it can… that’s what makes it so damn beautiful.” — Roy Mustang (Full Metal Alchemist)"',
'"To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have.” — Matsumoto Rangiku (Bleach)"',
'"Those who stand at the top determine what’s wrong and what’s right! This very place is neutral ground! Justice will prevail, you say? But, of course, it will! Whoever wins this war becomes justice!” — Don Quixote Doflamingo (One Piece)"',
'"Fear is not evil. It tells you what weakness is. And once you know your weakness, you can become stronger as well as kinder.” — Gildarts Clive (Fairy Tail)"',
'"Whatever you lose, you’ll find it again. But what you throw away you’ll never get back.” — Kenshin Himura (Rurouni Kenshin: Meiji Kenkaku Romantan)"',
'"Fear is freedom! Subjugation is liberation! Contradiction is truth! Those are the facts of this world! And you will all surrender to them, you pigs in human clothing!” — Satsuki Kiryuuin (Kill la Kill)"',
'"I am the hope of the universe. I am the answer to all living things that cry out for peace. I am protector of the innocent. I am the light in the darkness. I am truth. Ally to good! Nightmare to you!” — Son Goku (Dragon Ball Z)"',
'"A person can change, at the moment when the person wishes to change.” — Haruhi Fujioka (Ouran Highschool Host Club)"',
'"People, who can’t throw something important away, can never hope to change anything.” — Armin Arlert (Shingeki no Kyojin / Attack on Titan)"'
];

btn.addEventListener ('click', function(){
 var randomQuote = quotes[Math.floor(Math.random() *quotes.length)]
 output.innerHTML = randomQuote;
})
