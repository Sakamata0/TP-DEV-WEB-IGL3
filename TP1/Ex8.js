const wait = ms => new Promise(res => setTimeout(res, ms));

console.log("Début");
// Attente pour une seconde, après affichage :
wait(1000).then(()=> console.log("Fin"));