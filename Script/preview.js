import Cards from './data.js';
const api_key = '03760268c2411e2d785ed677c960080d';

// Getting the URL Params
const data = window.location.search;
const Url_params = new URLSearchParams(data);
const ID = Url_params.get('id');
console.log(ID);


// ! ***************************************************************
// Displaying the Main Card
Cards.forEach(card => {
  const {id,location,type,main_image,carousel_images,time,Zlije,team_work} = card;
  const {fixed_time,duration} = time;
  const {tp,src} = main_image;
  if(id==ID){
    // here goes all the functions that will use the data abouve.
    DisplayGrandCard(id,location,time,src,carousel_images,type,Zlije);
    getMedia(carousel_images);
    DisplayTeamWork(team_work);
  }
});

// the global function
function DisplayGrandCard(id, location, time,src,type,Zlije) {
  let holder = document.querySelector('#main-container');
  const ProCard = document.createElement('div');
  ProCard.classList.add('col-lg-4', 'col-md-4', 'ProductCard', 'w-100');
  ProCard.setAttribute('data-id', id);
  ProCard.innerHTML = `
    <div class="mb-2">
      <h1 class="h4 fw-bold my-2">رقم المشروع :#${id} 🏠</h1>
      <div class="immage-previewr my-2 mx-auto">
        <div class="row">
          <div class="col-lg-6">
            <div class="project-container ">
                <div>
                   <ul class="project-dethails ">
                      <li class="det_item list-style-none pro-local">الموقع 📌: <em class="location">${location}</em></li>
                      <li class="det_item list-style-none date-time">التاريخ ⏲️ : <span class="from">06/03/2022 </span>|| <span class="at">03/04/2024</span></li>
                    </ul>
                    <h1 class="h4 fw-bold my-2 Zlije-card">زليج ⚒️ :</h1>
                    <ul class="det_item list-style-none Zlij_D">
                      <li class="det_item list-style-none Zlij_type">النوع : Normal</li>
                      <li class="det_item list-style-none Zlij_size">الحجم : Medum</li>
                      <li>الطول : <span class="height">60 سم</span></li>
                      <li>العرض : <span class="width">40 سم</span></li>
                    </ul>
                </div>
                <div class="team-container ">
                  <h1 class="h4 fw-bold my-2">فريق العمل 👲</h1>
                  <div class="team-work-inner d-flex align-center  flex-wrap"></div>
                </div>
            </div>
          </div>
          <div class="col-lg-6 my-3">
            <div class="main-cover-holder">
              <img src="${src}" alt="" class="main-img border-2" id="man-img">
            </div>
          </div>
        </div>
      </div>
      <div class="small_carousel d-flex align-center gap-4 overflow-x-scroll pb-3"></div>
    </div>
  `;
  holder.append(ProCard);
}

// Displaying the Carousel images 
function getMedia(Array){
  const Carousel_inner = document.querySelector('.small_carousel');
  Carousel_inner.innerHTML = '';
  Array.forEach(item =>{
    const {mini_src,min_tp} = item;
    if(min_tp == 'img'){
      let mini_img = document.createElement('img');
      mini_img.src = mini_src;
      mini_img.classList.add('s-carousel_cover');
      Carousel_inner.append(mini_img);
    }else{
      let mini_video = document.createElement('video');
      mini_video.setAttribute('autoplay','loop','muted');
      mini_video.src = mini_src;
      mini_video.classList.add('s-carousel_cover');
      Carousel_inner.append(mini_video);
    }
  })
}
// Toggling the main image card function
let smCarousels = document.querySelectorAll('.s-carousel_cover');
smCarousels.forEach(item =>{
    item.addEventListener('click',()=>{
        const holder = document.querySelector('.main-cover-holder');
        if (item.tagName.toLowerCase() === 'img') {
            console.log('This is an image.');
            holder.innerHTML = '';
            holder.innerHTML = `<img src="${item.src}" onclick="togglemainimg(this);" width="100%" alt="" class="main-img bordered-2">`
        } else if (item.tagName.toLowerCase() === 'video') {
            console.log('This is a video.');
            holder.innerHTML = '';
            holder.innerHTML = `<video src="${item.src}" onclick="togglemainimg(this);" autoplay loop controls alt="" class="main-img bordered-2">`
        } else {
            console.error('This is neither an image nor a video.');
        }
    })
});

// Display the team work functionality
function DisplayTeamWork(team_work){
  team_work.forEach(item => {
    // console.log(item);
     const TeamContainer = document.querySelector('.team-work-inner');
     const {name,Avatar,social_media} = item;
     const {facebook,whatsapp,phone,portfolio} = social_media;
     const worker = document.createElement('div');
     worker.classList.add('team-item','text-center');
     worker.innerHTML = `
            <img src="${Avatar}" alt="" class="avatar mb-3 bordered-50">
            <h6 class="colored text-center text">${name}</h6>
            <ul class="social-links d-flex align-center gap-2">
              <a href="${facebook}" class="social-link">
                <li class="fab fa-facebook fa"></li>
              </a>
              <a href="tel:${whatsapp}" class="social-link">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a href="tel:${phone}" class="social-link">
                <i class="fa-solid fa-phone" style="scale: .5 !important; translate: 0 -15% !important;"></i>
              </a>
            </ul>
     `;
     TeamContainer.append(worker);
  });
}