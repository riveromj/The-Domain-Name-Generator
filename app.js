//console.log("The Domain Name Generator");

var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var hacks = ['.com','.net', '.us', '.io','.es']

for (let index=0; index< pronoun.length; index++){
    for (let indexAdj=0; indexAdj< adj.length; indexAdj++){
        for (indexNoum=0; indexNoum< noun.length; indexNoum++){
            for (indexHacks=0; indexHacks<hacks.length; indexHacks++)
            {
                let domain = pronoun[index] + adj[indexAdj] +noun[indexNoum] + hacks[indexHacks];
                console.log(domain);
            }  
        }
    }
}