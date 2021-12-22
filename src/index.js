//see all ramen images in the div with the id of ramen menu
//when page loads (domcontent), request data from server
//display images using img tag inside #ramen-menu
let id = 5;
document.addEventListener('DOMContentLoaded', init);

function init(){
    fetch('http://localhost:3000/ramens')
        .then(resp => resp.json())
        .then(data => data.forEach(element => renderRamen(element)))
    
    document.getElementById("new-ramen").addEventListener('submit', addRamen)
}


//HELLPER FUNCTIONS//

//DELIVERABLE 2//

function renderRamen(element){

    const image = document.createElement('img');
    image.src = element.image;

    image.addEventListener('click', displayInfo => {
        document.getElementsByClassName('detail-image')[0].src = image.src;
        document.getElementsByClassName('name')[0].innerText = element.name;
        document.getElementsByClassName('restaurant')[0].innerText = element.restaurant;
        document.getElementById('rating-display').textContent = element.rating;
        document.getElementById('comment-display').textContent = element.comment;
    });
    document.getElementById("ramen-menu").append(image);

}

//DELIVERABLE 3//

function addRamen(e){
    e.preventDefault();
    let newRamen = {
        id : id += 1,
        name: document.getElementById("new-name").value,
        restaurant: document.getElementById("new-restaurant").value,
        image: document.getElementById("new-image").value,
        rating: document.getElementById("new-rating").value,
        comment: document.getElementById("new-comment").value,
    }

    const image = document.createElement('img');
    image.src = newRamen.image;

    image.addEventListener('click', displayInfo => {
        document.getElementsByClassName('detail-image')[0].src = image.src;
        document.getElementsByClassName('name')[0].innerText = newRamen.name;
        document.getElementsByClassName('restaurant')[0].innerText = newRamen.restaurant;
        document.getElementById('rating-display').innerText = newRamen.rating;
        document.getElementById('comment-display').innerText = newRamen.comment;
    });
    document.getElementById("ramen-menu").append(image);
}