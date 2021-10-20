const data = JSON.parse( movies );
//console.log(data);
//console.log(data[0].maskImg);

function getRandNum(min = 1, max = 60){
    return Math.floor(Math.random() * (min - max) + max) ;
}

function getItemsList(listSize, min, max){

    var movieItemsList = [];
  
    for (var i=1;i<= listSize; i++) {
        movieItemsList.push( getRandNum(min, max) );
      }
   
    return movieItemsList;
}

function getMovieById( id ){
    console.log(id)
    return data[id].maskImg;
}


function createSelectionRow( title, items ){
    
    var finalHTML = "";
    var totalItems = "";
    
    items.forEach( ( item ) =>{
        totalItems += `
        <div class="selection-item ">
            <div class="selection-item">
                <img class="selection-item-img" src="assets/img/posters/${item}.jpg" alt="">
            </div>
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
