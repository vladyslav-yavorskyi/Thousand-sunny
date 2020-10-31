export class Select {
  constructor(selector) {
    this.el = document.querySelector(selector);

    this.#setup();
  }

  #setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.el.addEventListener("click", this.clickHandler);
    this.arrow = this.el.querySelector("[data-arrow='arrow']");
    this.value = this.el.querySelector("[data-type='value']");
  }

  clickHandler(event) {
    const { type } = event.target.dataset;

    if (type === "input") {
      this.open();
    } else if (type === "item") {
      const id = event.target.dataset.id;
      const content = event.target.textContent;

      this.selected(content, id);
    } else if (type === "backdrop") {
      this.close();
    }
  }

  selected(cont, id) {
    this.value.textContent = cont;

    this.el.querySelectorAll('[data-type="item"]').forEach((e) => {
      e.classList.remove("selected");
    });

    this.el.querySelector(`[data-id="${id}"]`).classList.add("selected");

    this.close();
  }

  open() {
    this.el.classList.add("open");
    this.arrow.classList.remove("fa-chevron-down");
    this.arrow.classList.add("fa-chevron-up");
  }

  close() {
    this.el.classList.remove("open");
    this.arrow.classList.remove("fa-chevron-up");
    this.arrow.classList.add("fa-chevron-down");
  }
}
