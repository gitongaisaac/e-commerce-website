/*
================================================================================================================================
Dom Element Selectors
================================================================================================================================
*/
const popCard = document.querySelector(".pop-card");

/* ============= Image divs ================ */
const jacket = document.querySelector(".jacket");
const shirt = document.querySelector(".shirt");
const trench = document.querySelector(".trench");
const skirt = document.querySelector(".skirt");
const casual = document.querySelector(".casual");
const pocketWatch = document.querySelector(".pocket-watch");
const wristWatch = document.querySelector(".wrist-watch");
const party = document.querySelector(".party");
const coat = document.querySelector(".coat");
const sports = document.querySelector(".sports");
const formal = document.querySelector(".formal");
const shorts = document.querySelector(".shorts");

/* ============= Other Elements ================ */
const subItems = document.querySelectorAll(".category-sub-item");
const news = document.querySelector(".newsletter .close");
const newsletterModal = document.querySelector(".newsletter");
const textThree = document.querySelector(".text-three");
const viewImgs = document.querySelectorAll(".view-img");
const pluss = document.querySelectorAll(".fa-plus");
const textOne = document.querySelector(".text-one");
const textTwo = document.querySelector(".text-two");
const views = document.querySelectorAll(".views");
const dots1 = document.querySelector("#dots-1");
const dot1 = document.querySelector(".dot-1");
const dot2 = document.querySelector(".dot-2");
const dot3 = document.querySelector(".dot-3");
const b1 = document.querySelector(".b-1");
const b2 = document.querySelector(".b-2");
const b3 = document.querySelector(".b-3");

/*
================================================================================================================================
Images
================================================================================================================================
*/
const jacketImg = "url('images/products/jacket-3.jpg')";
const jacketImgHover = "url('images/products/jacket-4.jpg')";

const shirtImg = "url('images/products/shirt-1.jpg')";
const shirtImgHover = "url('images/products/shirt-2.jpg')";

const trenchImg = "url('images/products/jacket-5.jpg')";
const trenchImgHover = "url('images/products/jacket-6.jpg')";

const skirtImg = "url('images/products/clothes-3.jpg')";
const skirtImgHover = "url('images/products/clothes-4.jpg')";

const casualImg = "url('images/products/shoe-2.jpg')";
const casualImgHover = "url('images/products/shoe-2_1.jpg')";

const pocketWatchImg = "url('images/products/watch-3.jpg')";
const pocketWatchImgHover = "url('images/products/watch-4.jpg')";

const wristWatchImg = "url('images/products/watch-1.jpg')";
const wristWatchImgHover = "url('images/products/watch-2.jpg')";

const partyImg = "url('images/products/party-wear-1.jpg')";
const partyImgHover = "url('images/products/party-wear-2.jpg')";

const coatImg = "url('images/products/jacket-1.jpg')";
const coatImgHover = "url('images/products/jacket-2.jpg')";

const sportsImg = "url('images/products/sports-2.jpg')";
const sportsImgHover = "url('images/products/sports-4.jpg')";

const formalImg = "url('images/products/shoe-1.jpg')";
const formalImgHover = "url('images/products/shoe-1_1.jpg')";

const shortsImg = "url('images/products/shorts-1.jpg')";
const shortsImgHover = "url('images/products/shorts-2.jpg')";

/*
================================================================================================================================
Arrays
================================================================================================================================
*/
const imgTags = [
  jacket,
  shirt,
  trench,
  skirt,
  casual,
  pocketWatch,
  wristWatch,
  party,
  coat,
  sports,
  formal,
  shorts,
];

const images = [
  jacketImg,
  shirtImg,
  trenchImg,
  skirtImg,
  casualImg,
  pocketWatchImg,
  wristWatchImg,
  partyImg,
  coatImg,
  sportsImg,
  formalImg,
  shortsImg,
];

const imageHovers = [
  jacketImgHover,
  shirtImgHover,
  trenchImgHover,
  skirtImgHover,
  casualImgHover,
  pocketWatchImgHover,
  wristWatchImgHover,
  partyImgHover,
  coatImgHover,
  sportsImgHover,
  formalImgHover,
  shortsImgHover,
];

/*
================================================================================================================================
UI Class
================================================================================================================================
*/
class UI {
  static titleSubString() {
    const vets = document.querySelectorAll(".vet");
    const titles = document.querySelectorAll(".seller-description .title");

    /* showcase substring */
    vets.forEach((vet) => {
      const vetText = vet.textContent.trim().length;
      if (vetText >= 16) {
        const vetSlice = vet.textContent.trim();
        const newVet = vetSlice.substring(0, 14) + "...";
        vet.textContent = newVet;
        return (vet.textContent = newVet);
      }
    });

    /* seller substring */
    titles.forEach((title) => {
      const titleText = title.textContent.trim().length;

      if (titleText >= 12) {
        const titleSlice = title.textContent.trim();
        const newTitle = titleSlice.substring(0, 12) + "...";
        title.textContent = newTitle;
        return (title.textContent = newTitle);
      }
    });
  }

  static newsletter() {
    const element = news.parentElement.parentElement.parentElement;
    news.addEventListener("click", (e) => {
      if (!e.target.classList.contains(".display-none")) {
        newsletterModal.classList.add("fade-out");
        setTimeout(() => {
          newsletterModal.classList.add("display-none");
          newsletterModal.classList.remove("position");
        }, 1000);
      }
    });
  }
}

/*
================================================================================================================================
On Loading the page
================================================================================================================================
*/
function onLoading() {
  UI.titleSubString();
  UI.newsletter();
}

/*
================================================================================================================================
Event DOMConentLoaded
================================================================================================================================
*/
document.addEventListener("DOMContentLoaded", (e) => {
  onLoading();
});

/*
================================================================================================================================
Eventlistener
================================================================================================================================
*/
let k = "1";
for (let i = ""; i < "12"; i++) {
  const x = k++;
  const c = x - 1;

  const no = document.querySelector("#no" + x);
  /* ============= mouse over ================ */
  no.addEventListener("mouseover", (e) => {
    const shadow =
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), -10px 10px 10px 5px rgba(0, 0, 0, 0.04)";
    no.style.boxShadow = shadow;
    no.style.transform = "scale(1.0)";
    imgTags[c].style.transform = "Scale(1.2)";
    imgTags[c].style.backgroundImage = imageHovers[c];
  });

  /* ============= mouse leave ================ */
  no.addEventListener("mouseleave", (e) => {
    no.style.boxShadow = "var(--shadow-1)";
    no.style.transform = "none";
    imgTags[c].style.transform = "none";
    imgTags[c].style.backgroundImage = images[c];
  });
}
