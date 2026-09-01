const searchInput = document.querySelector("#resource-search");
const filterButtons = [...document.querySelectorAll(".filter")];
const resourceCards = [...document.querySelectorAll(".resource-card")];
const emptyState = document.querySelector("#empty-state");

let activeCategory = "all";

function updateResources() {
  const query = searchInput.value.trim().toLocaleLowerCase("zh-CN");
  let visibleCount = 0;

  resourceCards.forEach((card) => {
    const matchesCategory =
      activeCategory === "all" || card.dataset.category === activeCategory;
    const matchesSearch = card.dataset.search
      .toLocaleLowerCase("zh-CN")
      .includes(query);
    const isVisible = matchesCategory && matchesSearch;

    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  emptyState.hidden = visibleCount !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.filter;
    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    updateResources();
  });
});

searchInput.addEventListener("input", updateResources);

filterButtons.forEach((button) => {
  button.setAttribute("aria-pressed", String(button.classList.contains("active")));
});
