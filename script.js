const listaVideos = [
    {
        id: 1,
        url: "https://www.youtube.com/embed/SDaA4vtaMv8?si=MWaMHrRquXzvYy87",
        nome: 'Projeto Seja um Programador'

    },
    {
        id: 2,
        url: "https://www.youtube.com/embed/-LrUT1Klzc8?si=tOiz5bzG9et4Js_k",
        nome: 'Projeto Seja um Programador 2'

    }
];



const divVideos = document.getElementById('lista-videos')
const iframe = document.getElementById('iframeVideo')





async function pegandoVideos() {
    listaVideos.forEach((video, index) => {
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `<div class="video"> <a class="video-link"  src="${video.url}"> ${video.nome} <span>#${video.id}</span> </a> </div>`
        divVideos.appendChild(newDiv);
        newDiv.addEventListener('click', (event) => {
             let urlVideo = listaVideos[video.id -1].url;
            iframe.src = urlVideo;
        })
        
        
    })
}
pegandoVideos()