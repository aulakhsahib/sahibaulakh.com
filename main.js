import './style.css';

const imageContainers = document.querySelectorAll(".project-image-container");
imageContainers.forEach(imageContainer => {
  const showInfoContainer = imageContainer.querySelector(".project-info-container");
  imageContainer.addEventListener("mouseover", () => {
    showInfoContainer.classList.remove("hidden");
  });
  imageContainer.addEventListener("mouseout", () => {
    showInfoContainer.classList.add("hidden");
  });

});
