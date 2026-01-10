export default class HeaderFixed {
  constructor(config) {
    this.headerTypes = config;
    this.header = document.querySelector(`.${this.headerTypes.HEADER}`);

    if (!this.header) {
      throw new Error("Header element is missing.");
    }

    this.THRESHOLD = 10; // px
    this.isFixed = false;

    this.initEvents();
    this.updateFixedClass(); // инициализация текущего состояния
  }

  initEvents() {
    window.addEventListener('scroll', this._onScroll.bind(this), { passive: true });
  }

  _onScroll() {
    if (this._ticking) return;
    this._ticking = true;
    window.requestAnimationFrame(() => this.updateFixedClass());
  }

  updateFixedClass() {
    const currentY = window.scrollY || 0;
    const shouldBeFixed = currentY > this.THRESHOLD;

    if (shouldBeFixed && !this.isFixed) {
      this.header.classList.add(this.headerTypes.HEADER_FIXED);
      this.isFixed = true;
      this.header.style.boxShadow = "0 0 20px var(--shadow-color)";
      this.header.style.webkitBoxShadow = "0 0 20px var(--shadow-color)";
    } else if (!shouldBeFixed && this.isFixed) {
      this.header.classList.remove(this.headerTypes.HEADER_FIXED);
      this.isFixed = false;
      this.header.style.boxShadow = "";
      this.header.style.webkitBoxShadow = "";
    }
    this._ticking = false;
  }

  removeFixedClass() {
    this.header.classList.remove(this.headerTypes.HEADER_FIXED);
    this.isFixed = false;
    this.header.style.boxShadow = "";
    this.header.style.webkitBoxShadow = "";
  }
}