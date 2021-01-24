const BUTTON = document.querySelector("#footerBtn");
const URL = "https://www.youtube.com/channel/UCzL15XKy-yJfr8wb6-R994Q";



openPage = () => { 
    window.open(URL, '_blank');
}


BUTTON.addEventListener("click", openPage);