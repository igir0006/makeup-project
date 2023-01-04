import { NetworkError} from "./utils.js";

const baseURL = `https://picsum.photos/`;
const size = document.querySelector('.sizes');
const headerSelect = document.querySelector(".choices")
const overlay = document.querySelector(".overlay")
const header = document.querySelector('header');
const headerImage = document.querySelector('.background');
const main = document.querySelector('main');
const downloadUrl = "https://picsum.photos/id/"


const APP = {
    storageKey: 'yourHeader',

    init: () => {
      APP.checkForHeader();

      APP.clearHeaderImage();

      APP.getImageList()
    },

    checkForHeader: () => {
      const heading = localStorage.getItem('yourHeader');
      if(!heading){
        overlay.classList.add("active")
        APP.setHeader();
      }else if(heading){
        overlay.classList.remove("active")
        headerImage.style.background = heading;
      }else{
        APP.setHeader(ev)
      }
    },

    setHeader: (ev) => {
      headerSelect.addEventListener('change', (ev) => {
        const id = ev.target.value;
        if(ev.target){
            overlay.classList.remove("active")
            headerImage.style.background = `url(https://picsum.photos/id/${id}/1200/200?grayscale) center/cover no-repeat`;
            localStorage.setItem(APP.storageKey,headerImage.style.background)
        }else{
            APP.handleError(err)
        }})
    },

    clearHeaderImage: (ev) => {
      header.addEventListener('dblclick', (ev) => {
        localStorage.clear();
        headerImage.style.background = '';
        overlay.classList.add("active")
        APP.setHeader()
      });
    },

    getImageList: (ev) => {
      size.addEventListener('change', (ev) =>{
        main.innerHTML = '<div class="loading"></div>'
      let num = Math.floor(Math.random() * 20);
      let url = `https://picsum.photos/v2/list?limit=12&page=${num}`;
      fetch(url)
      .then(resp => {
        if (!resp.ok) throw new NetworkError('Failed API Call', resp);
        return resp.json();
      })
      .then(data => {
        APP.buildGrid(ev,data) 
      })
      .catch(err => 
      APP.handleError(err))
      })
    },

    buildGrid: (ev,data) => {
        const imageList = data.map((image) => {
        const {author, id} = image;
        const width = ev.target.value;
        const height = ev.target.value;
        return ` 
        <p>
          <img src= ${downloadUrl}${id}/${width}/${height}>
        </p>
        <p> <span>${author}</span></p>`
      }).join('')
        main.innerHTML = imageList;
    },

    handleError: (err) => {
      err =  `<h2 class='err'>
      there was an error </h2>`
      main.innerHTML = err
      return main.innerHTML
    },
  };
  
  document.addEventListener('DOMContentLoaded', APP.init);
  




   

