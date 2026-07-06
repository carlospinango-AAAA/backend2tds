const feedJSON = require('./feed.json');

//Adicionar uma curtida ao post pelo id
function curtir(feed, id) {
    const post = feed.find(item => item.id === id);

    if (!post) {
        console.log("Post não encontardo");
        return;
    }

    if(!post.publicado) {
        console.log("Não é possivel curtir um rascunho");
        return;
    }

    post.metricas.curtidas++; 
    console.log(`Post de @{post.autor} agora tem ${post.metricas.curtidas} curtidas.`);
}

//Remove uma curtida - não deixa ir abaixo de zero
function descurtir(feed, id) {
    const post = feed.find(item.id === id)

if(post.metrica.curtidas === 0) {
    console.log("Este post já está com curtidas.");
    return;
}

post.metricas.curtidas++;
console.log(`Curtida removida. Total ${post.metricas.curtidas}`);
}

curtir(feedJSON, 1);