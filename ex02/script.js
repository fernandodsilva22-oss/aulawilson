const image = document.getElementById('image');
const Mensagem = document.getElementById('Mensagem');

image.addEventListener('mouseover', function(){
Mensagem.textContent = 'Você passou o mouse na imagem'
Mensagem.addEventListener('mouseout' , function(){
    Mensagem.textContent = ''
})
});
