import { galleryItems } from "./gallery-item.js";
const $mainPage = document.querySelector(".mainPage");
// render gallery of projects to DOM
const $gallery = document.querySelector(".gallery");
console.log($gallery);
const $home = document.querySelector(".home");
console.log($home);

$home.addEventListener("click", goBackHomePage);

function goBackHomePage() {
  $projetPage.style.display = "none";
  $mainPage.style.display = "block";
}

generateGallery();

function createGalleryItem(item) {
  const galleryItemDiv = document.createElement("div");
  galleryItemDiv.onclick = () => createProjectPage(item);
  galleryItemDiv.classList.add("col-xl-4", "col-lg-4", "col-md-6", "mb-4");
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
      <p class="small mb-0">
      <a href=${item.link}>Try it out </a>
      </p>
     
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
    <a href="${project.link_download}" download="filename.js">Download File</a>
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
<a href="${project.link}" class="projectPic">

  <img
    src="${project.src}"
  />
</a>`;
  $projetPage.innerHTML = section;
}
