window.addEventListener("DOMContentLoaded", () => {
  const prevPageButton = document.getElementById("prev");
  const nextPageButton = document.getElementById("next");

  const currentLink = document.querySelector("#sidebar li.active a");
  const links = Array.from(document.querySelectorAll("#sidebar li a"));

  const currentIndex = links.findIndex(
    (link) => link.href === currentLink?.href
  );

  const handlePrevPage = (index) => {
    if (index > 0) {
      const prevLink = links[index - 1].href;
      location.href = prevLink;
    }
  };

  const handleNextPage = (index) => {
    if (index < links.length - 1) {
      const nextLink = links[index + 1].href;
      location.href = nextLink;
    }
  };

  prevPageButton.addEventListener("click", () => {
    handlePrevPage(currentIndex);
  });

  nextPageButton.addEventListener("click", () => {
    handleNextPage(currentIndex);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      handlePrevPage(currentIndex);
    } else if (event.key === "ArrowRight") {
      handleNextPage(currentIndex);
    }
  });

  if (currentIndex === 0) {
    prevPageButton.remove();
  }
  if (currentIndex === links.length - 1) {
    nextPageButton.remove();
  }
});
