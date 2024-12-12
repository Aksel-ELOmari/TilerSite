
import Cards from './data.js';






//! *****************************************************************



// Displaying the cards 
Cards.forEach(card => {
    const {id,location,type,main_image,carousel_images,time,Zlije,team_work} = card;
    const {tp,src} = main_image;
    let holder = document.querySelector('.projects-container .row');
    const ProCard = document.createElement('div');
    ProCard.classList.add('col-lg-4','col-md-4','ProductCard');
    ProCard.setAttribute('data-id',id);
    ProCard.innerHTML =
    `
        <div class="h1 colored Card_Num font-family-italic">#${id}</div>
        <a href="./preview.html?id=${id}" class="Pro_card_inner text-decoration-none mb-4">
            <img src="${src}" height="200" width="auto" alt="" class="project-cover">
            <div class="project-title h5 me-3 mt-2">${type}</div>
            <div class="project-date pb-3 pe-3">${time.fixed_time} ⏲️ || <em class="location-city">${location} 🏕️</em></div>
        </a>
    `;
    holder.append(ProCard);
})