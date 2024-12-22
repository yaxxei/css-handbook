window.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  const toggleSidebarIcon = document.getElementById("toggle-sdidebar-icon");
  const toggleSidebarIconWithin = document.querySelector("#sidebar > button");

  function toggleSidebar(isHidden) {
    if (isHidden) toggleSidebarIconWithin.blur();
    sidebar.ariaHidden = !isHidden;
  }

  function handleSidebarByMediaQuery() {
    const isHidden = mediaQuery.matches;
    toggleSidebar(!isHidden);
    if (isHidden) toggleSidebarIconWithin.style.display = "block";
    else toggleSidebarIconWithin.style.display = "none";
  }

  function handleSidebarByClick() {
    const isHidden = sidebar.ariaHidden === "true";
    toggleSidebar(isHidden);
  }

  window.addEventListener("load", () => handleSidebarByMediaQuery());
  mediaQuery.addEventListener("change", () => handleSidebarByMediaQuery());

  toggleSidebarIcon.addEventListener("click", () => handleSidebarByClick());

  toggleSidebarIconWithin.addEventListener("click", () =>
    handleSidebarByClick()
  );

  document.addEventListener("click", (event) => {
    if (
      mediaQuery.matches &&
      !sidebar.contains(event.target) &&
      !toggleSidebarIcon.contains(event.target)
    ) {
      toggleSidebar(false);
    }
  });
});
