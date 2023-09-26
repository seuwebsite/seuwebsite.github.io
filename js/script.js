// script.js
document.getElementById("changePage").addEventListener("click", function () {
    const content = document.getElementById("content");

    // Adicione a classe "hidden" para ocultar a página atual com fade-out
    content.classList.add("hidden");

    // Após um breve atraso (0.5s para corresponder à duração da transição), troque o conteúdo
    setTimeout(function () {
        // Substitua o conteúdo da página
        content.innerHTML = "<p>pagina2</p>";

        // Remova a classe "hidden" para mostrar a nova página com fade-in
        content.classList.remove("hidden");
    }, 500);
});
