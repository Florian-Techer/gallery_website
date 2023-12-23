window.onload = () => {
  if (window.innerWidth > 600) {
    console.log(window.innerWidth);
    // ---------- HEADER ----------
    let timer;
    const header = document.querySelector("header");
    function hideHeader() {
      header.style.display = "none";
    }

    function showHeader() {
      header.style.display = "flex";
      resetTimer();
    }

    function resetTimer() {
      clearTimeout(timer);
      timer = setTimeout(hideHeader, 2000);
    }

    function clearTimer() {
      clearTimeout(timer);
    }

    document.addEventListener("mousemove", function () {
      if (window.scrollY <= 50) {
        console.log("move");
        showHeader();
        clearTimer()
      }else if(window.scrollY > 50){
        showHeader()
      }
    });
    document.addEventListener("scroll", function () {
      showHeader();
    });
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("scroll");
      } else if (window.scrollY <= 50) {
        header.classList.remove("scroll");
        showHeader();
        clearTimer();
      }
    });

    // ---------- GALLERY ----------
    const previewBox = document.querySelector(".preview_box");
    const galleryContainer = document.querySelectorAll(
      ".gallery_image_container"
    );

    const closeBtn = document.querySelector(".close_btn");
    const previewImg = document.querySelector(".preview_img");
    const shadow = document.querySelector(".shadow");

    let textDescription = [];
    const previewTitle = document.querySelector(".preview_title_box");
    const previewTechnique = document.querySelector(".preview_technique_box");
    const previewPrice = document.querySelector(".preview_price_box");

    galleryContainer.forEach((element) => {
      element.addEventListener("click", function () {
        textDescription = [];
        const imageDetails = element.querySelectorAll(".image_description");
        const selectedImageUrl = element.querySelector("img").src;

        imageDetails.forEach(function (element) {
          console.log(element);
          let text = element.innerText;
          textDescription.push(text);
        });
        console.log(textDescription);
        const elementSize = element.classList[0];
        switch (elementSize) {
          case "tall":
            preview(selectedImageUrl, "tall");
            break;
          case "big":
            preview(selectedImageUrl);
            break;
          // ...
          case "wide":
            preview(selectedImageUrl, "wide");
            break;
          default:
            preview(selectedImageUrl);
        }
      });
    });

    closeBtn.onclick = () => {
      clearPreviewBox();
    };

    function preview(imageUrl, imageSize = null) {
      previewImg.src = imageUrl;
      if (imageSize) {
        previewBox.classList.add("show", imageSize);
      } else {
        previewBox.classList.add("show");
      }

      shadow.style.display = "block";
      previewTitle.textContent = `${textDescription[0]}`;
      previewTechnique.textContent = textDescription[1];
      previewPrice.textContent = textDescription[2];
    }

    function clearPreviewBox() {
      previewBox.classList.remove("show", "tall", "wide");
      shadow.style.display = "none";
    }
  } else if (window.innerWidth <= 600) {
    const header = document.querySelector("header");
    const openMenuIcon = document.querySelector(".open_menu_icon");
    const closeMenuIcon = document.querySelector(".close_menu_icon");
    openMenuIcon.addEventListener("click", function () {
      header.classList.add("show_menu");
      openMenuIcon.style.display = "none";
      closeMenuIcon.style.display = "block";
    });
    closeMenuIcon.addEventListener("click", function () {
      header.classList.remove("show_menu");
      openMenuIcon.style.display = "block";
      closeMenuIcon.style.display = "none";
    });

    const galleryContainer = document.querySelectorAll(
        ".gallery_image_container"
      );

      galleryContainer.forEach((element) => {
        element.addEventListener("click", function () {
            console.log('click')
          element.classList.toggle('mobileHover');
        });
      });
  }
};
