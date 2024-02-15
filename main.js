const navbarCollapse = document.querySelector(".navbar-collapse");

const hideNavbarCollapse = () => {
  if (!navbarCollapse.classList.contains("show")) return;
  navbarCollapse.classList.remove("show");
};

document.addEventListener("click", hideNavbarCollapse);

const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#navbar-example",
});
