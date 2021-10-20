$(document).ready(function () {
    const url = $(location).attr('href');
    const movieId = url.split("=")[1];

    const lblMovieTitle = document.getElementById("res-movie-title");
    const lblMovieSinopsis = document.getElementById("res-movie-sinopsis");
    const lblMovieOpinion = document.getElementById("res-movie-opinion");
    const lblstarsHtml = document.getElementById("res-movie-stars");
    const frameMovieTrailer = document.getElementById("res-movie-trailer");
    const imgMoviePoster = document.getElementById("res-movie-img");
    const divGalleryImgs = document.getElementById("res-gallery-imgs");
    const galModalImg = document.getElementById("gallery-modal-img");


    const galleryModal = new bootstrap.Modal(document.getElementById('gallery-modal'));

    const data = JSON.parse(movies);

    imgMoviePoster.innerHTML = data[movieId].maskImg;
    imgMoviePoster.innerHTML = `<img class="selection-item review" src="${data[movieId].maskImg}" alt="">`;
    lblMovieTitle.innerHTML = data[movieId].title;
    lblMovieSinopsis.innerHTML = data[movieId].desc;
    lblMovieOpinion.innerHTML = data[movieId].opinion;
    frameMovieTrailer.innerHTML = `<iframe src="https://www.youtube.com/embed/${data[movieId].trailer}?start=1" title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                    </iframe> `;



    getStarsHTML(data[movieId].score);
    getGalleryImgs(movieId);


    function getGalleryImgs(id) {

        for (var i = 0; i <= 14; i++) {

            divGalleryImgs.innerHTML += `<div class="gallery-item col-md-2" style="margin-bottom: 24px">
                                            <img class="gallery-item-img" src="assets/img/gallery/${id}/${i}.jpg" alt="">
                                        </div>`;

        }
    }


    const galleryItems = document.querySelectorAll(".gallery-item");
    galleryItems.forEach((item, i) => {
        item.addEventListener("click", () => {
            galModalImg.innerHTML = `<img style="width: 100%;" src="assets/img/gallery/${movieId}/${i}.jpg" alt="">`;
            galleryModal.show();
        });
    });

    

    function getStarsHTML(stars) {
        var cont = 0;
        while (cont < 5) {
            if (cont < stars) {
                lblstarsHtml.innerHTML += `<i class="material-icons align-middle" style="font-size: xx-large;">star</i>`
            } else {
                lblstarsHtml.innerHTML += `<i class="material-icons align-middle" style="font-size: xx-large;">star_border</i>`
            }
            cont++;
        }
    }


    $(".navbar-logo").click(function(){
        window.open(`index.html`,"_self");
    })
    
})