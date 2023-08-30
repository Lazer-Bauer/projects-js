import { galleryItems } from "./gallery-item.js";
const $about = document.querySelector(".about");
const $contact = document.querySelector(".contact");
const $usedTechnology = document.querySelector(".used-Technology");
const $galleryPage = document.querySelector(".gallery-page");
const $mainPage = document.querySelector(".mainPage");
const $gallery = document.querySelector(".gallery");
const $home = document.querySelector(".home");
const $homeNavigator = document.querySelectorAll(".home-navigator");
const $aboutNavigator = document.querySelectorAll(".about-navigator");
const $galleryNavigator = document.querySelectorAll(".gallery-navigator");
const $contactNavigator = document.querySelectorAll(".contact-navigator");
$homeNavigator.forEach((n) => {
  n.addEventListener("click", () => scrollToSection($home));
});
$aboutNavigator.forEach((n) => {
  n.addEventListener("click", () => scrollToSection($about));
});
$galleryNavigator.forEach((n) => {
  n.addEventListener("click", () => scrollToSection($galleryPage));
});
$contactNavigator.forEach((n) => {
  n.addEventListener("click", () => scrollToSection($contact));
});

function scrollToSection(element) {
  $projetPage.style.display = "none";
  $mainPage.style.display = "";
  console.log(element);
  element.scrollIntoView({ behavior: "smooth" });
}

// render icon of used technology
const techImg = ["api", "bootstrap", "class", "css", "es6", "html", "js", "ts"];
techImg.forEach((tech) => {
  $usedTechnology.innerHTML += `<img src="../icons/${tech}.png" alt="icon">`;
});

// render gallery of projects to DOM

generateGallery();

function createGalleryItem(item) {
  const galleryItemDiv = document.createElement("div");
  galleryItemDiv.onclick = () => createProjectPage(item);
  // galleryItemDiv.classList.add("col-xl-4", "col-lg-4", "col-md-6", "mb-4");
  galleryItemDiv.innerHTML = ` 
<div class="bg-white rounded shadow-sm gallery-card">
  <img
    src=${item.src}
    alt=""
    class="img-fluid card-img-top"
  />
  <div class="p-4">
    <h5><a href="#" class="text-dark">${item.title}</a></h5>
    <p class="small text-muted mb-0">
      ${item.description}
    </p>
    <div
      class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4"
    >
    
     
    </div>
  </div>
</div>`;
  return galleryItemDiv;
}
function generateGallery() {
  galleryItems.forEach((item) => {
    const itemDiv = createGalleryItem(item);
    console.log(item);
    $gallery.appendChild(itemDiv);
  });
}

// render project page
const $projetPage = document.querySelector(".projetPage");
console.log($projetPage);

function createProjectPage(project) {
  $mainPage.style.display = "none";
  $projetPage.style.display = "block";
  const section = ` <div class="projectDescription">
 
  <h2>${project.title}</h2>
  <p> ${project.description}</p>
  <div class="projectLinks">
    <a href="${project.link_download}" download="filename.zip">Download File</a>
    <a href="${project.link_git}">git link</a>
  </div>
</div>
<div class="projetTechnology">
<h3>Technology used<h3/>
${project.technologyTools
  .map(
    (link) =>
      ` <img
  src="${link}"
  alt="html"
/>`
  )
  .join(" ")}

</div>
<a href="${project.link}" target="_blank" class="projectPic">

  <img
    src="${project.src}"
  />
</a>`;
  $projetPage.innerHTML = section;
}
