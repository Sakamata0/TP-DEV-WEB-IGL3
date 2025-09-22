async function getAPI() {
    // La récupération de l'API :
    const reponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    if(!reponse.ok) {
        console.error("Erreur lors de la récupération des données");
    }
    else
    {
        // La récupération des données JSON :
        const donnee = await reponse.json();
        console.log(donnee.slice(0, 5));
    }
}

// L'appel de la fonction :
getAPI();