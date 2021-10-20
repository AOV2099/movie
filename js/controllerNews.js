$(document).ready(function () {
    const url = $(location).attr('href');
    const movieId = url.split("=")[1];

    const sinopsisModal = new bootstrap.Modal(document.getElementById('sinopsis-modal'));
    const sinopsisModalTitle = document.getElementById('sinopsis-modal-title');
    const sinopsisModalImg = document.getElementById('sinopsis-modal-img');
    const sinopsisModalDesc = document.getElementById('sinopsis-modal-desc');

    const divOtherNews = document.getElementById("other-news-container");
    const selectionsMenu = document.getElementById('selections-menu');
    const data = JSON.parse(movies);


    const btnMovieReviewModal = $('#btn-review-modal');


    divOtherNews.innerHTML += addOtherNew('assets/img/gallery/0/12.jpg', 'STRANGER THINGS', 'Nueva temporada en pausa.');
    divOtherNews.innerHTML += addOtherNew('assets/img/gallery/3/12.jpg', 'SABRINA CANCELADA', 'El peor error de Netflix?');
    divOtherNews.innerHTML += addOtherNew('assets/img/gallery/6/12.jpg', 'THE MANDALORIAN', 'Luke vuelve para salvar el día.');
    divOtherNews.innerHTML += addOtherNew('assets/img/gallery/8/0.jpg', 'KIMETSU NO YAIBA', 'No te subas al tren, Rengoku :(');

    divOtherNews.innerHTML += addOtherNew('assets/img/gallery/42/3.jpg', 'DAREDEVIL', 'Ya veremos, dijo el ciego.');
    divOtherNews.innerHTML += addOtherNew('assets/img/gallery/0/3.jpg', 'STRANGER THINGS', 'Los chicos se toman un tiempo fuera.');
    divOtherNews.innerHTML += addOtherNew('assets/img/gallery/8/10.jpg', 'MICHAEL JACKSON', 'Hace cameo en famoso anime.');
    divOtherNews.innerHTML += addOtherNew('assets/img/gallery/3/3.jpg', 'SABRINA HABLA', 'Se casará con el programador de esto.');




    selectionsMenu.innerHTML += createSelectionRow("Destacados de la semana", [0, 3, 6, 8, 42, 1, 7, 11]);


    const newsItems = document.querySelectorAll(".img-other-news");
    newsItems.forEach((item, i) => {

        item.addEventListener("click", () => {
            alert('Ya no alcancé a programar esto :(');
        });

    });


    function addOtherNew(imgUrl, title, caption){
        var cont = `
        <div class=" col-md-3 col-sm-12">
            <img class="img-other-news" src="${imgUrl}" alt=""> 
            <div class="cite">
                <div style="font-weight: 700;">${title}</div>
                <p>${caption}</p>
            </div>
        </div>
        `;
        return cont
    }



    function getMovieById(id) {
        return data[id].maskImg;
    }

    function createSelectionRow(title, items) {

        var finalHTML = "";
        var totalItems = "";

        items.forEach((item) => {
            totalItems += `
        <div class="selection-item" data-id-item="${item}" ">
            <img class="selection-item-img" src="${getMovieById(item)}" alt="">
        </div>
        `;
        });

        finalHTML = `
            <div class="selection-wrapper"> 
                <div class="container"><h1>${title}</h1></div>
                <br>
                <div class="selection-slider" >
                    ${totalItems}    
                </div>
            </div>

    `
        return finalHTML;
    }

    const scrollContainers = document.querySelectorAll(".selection-slider");
    scrollContainers.forEach((cont, i) => {

        cont.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainers[i].scrollLeft += evt.deltaY;
        });

    });


    const selectionItems = document.querySelectorAll(".selection-item");
    selectionItems.forEach((item, i) => {

        item.addEventListener("click", () => {
            sinopsisModalTitle.innerHTML = data[item.getAttribute('data-id-item')].title;
            sinopsisModalImg.style.backgroundColor = "#F8981E";
            sinopsisModalImg.style.background = `linear-gradient(to top, rgba(0,0,0,0), #222222), linear-gradient(to bottom, rgba(0,0,0,0), #222222), url('${data[item.getAttribute('data-id-item')].maskImg}')`;
            sinopsisModalImg.style.backgroundRepeat = 'no-repeat';
            sinopsisModalImg.style.backgroundSize = 'cover';
            sinopsisModalDesc.innerHTML = data[item.getAttribute('data-id-item')].desc;
            sinopsisModal.show();
            currMovieId = item.getAttribute('data-id-item');
        });

    });


    btnMovieReviewModal.click(function(){
        openReviewTab(currMovieId);
    })


    function openReviewTab(id){
        window.open(`../review.html?id=${id}`,"_self")
    }

    $(".navbar-logo").click(function(){
        window.open(`index.html`,"_self");
    })

})