$(document).ready(function () {

    const sinopsisModal = new bootstrap.Modal(document.getElementById('sinopsis-modal'));
    const sinopsisModalTitle = document.getElementById('sinopsis-modal-title');
    const sinopsisModalImg = document.getElementById('sinopsis-modal-img');
    const sinopsisModalDesc = document.getElementById('sinopsis-modal-desc');
    const selectionsMenu = document.getElementById('selections-menu');
    const data = JSON.parse(movies);
    const btnMovieReviewModal = $('#btn-review-modal');
    var currMovieId = 0;

    function getRandNum(min = 1, max = 60) {
        return Math.floor(Math.random() * (min - max) + max);
    }

    function getItemsList(listSize, min, max) {

        var movieItemsList = [];

        for (var i = 1; i <= listSize; i++) {
            movieItemsList.push(getRandNum(min, max));
        }

        return movieItemsList;
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
        <h2>${title}</h2>
        <div class="selection-slider" >
            ${totalItems}    
        </div>
    </div>

    <hr>
    <br>
    `
        return finalHTML;
    }


    function openReviewTab(id){
        window.open(`/review.html?id=${id}`,"_self")
    }

    selectionsMenu.innerHTML += createSelectionRow("NUEVOS LANZAMIENTOS", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    selectionsMenu.innerHTML += createSelectionRow("RECOMENDADAS", [13, 14, 15, 16, 17, 8, 9, 10, 11, 12]);
    selectionsMenu.innerHTML += createSelectionRow("MONAS CHINAS", getItemsList(20, 45, 56));
    selectionsMenu.innerHTML += createSelectionRow("SERIES DEL MOMENTO", [36, 14, 40, 41, 2, 5, 69, 42, 6, 37]);
    selectionsMenu.innerHTML += createSelectionRow("TERROR", getItemsList(20, 56, 69));

    const scrollContainers = document.querySelectorAll(".selection-slider");
    scrollContainers.forEach((cont, i) => {

        cont.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainers[i].scrollLeft += evt.deltaY;
        });

    });

    const featuredMoviesBtn = document.querySelectorAll(".btn-review-featured");
    featuredMoviesBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            openReviewTab(btn.getAttribute('data-featured-id'));
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

    $(".navbar-logo").click(function(){
        window.open(`index.html`,"_self");
    })

})