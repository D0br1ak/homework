export default function initSizes() {
  const sizesList = document.querySelector('[data-sizes="list"]');
  const sizesButtons = document.querySelectorAll('[data-sizes="button"]');

  if (!sizesList || sizesButtons.length === 0) return;

  const handleSizeClick = (event) => {
    const target = event.target;
    if (!target?.classList.contains("product__sizes-button")) return;

    sizesButtons.forEach((button) =>
      button.classList.remove("product__sizes-button--active")
    );
    target.classList.add("product__sizes-button--active");
  };

  sizesList.addEventListener("click", handleSizeClick);
}