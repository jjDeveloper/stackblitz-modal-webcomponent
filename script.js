class JJModal extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const section = (this.hasAttribute("id")) ? this.getAttribute("id") : undefined;

    if (section) {
      const source = document.getElementById("section-" + section);
      this.appendChild(source.content);
      if (this.dataset.close) this._attachCloseEvent();
      if (this.dataset.show) this._attachShowEvent();
    }
  }

  _attachCloseEvent() {
    const elm = this.querySelector(this.dataset.close);
    elm.addEventListener("click", this._close);
    elm.dataset.close = this.getAttribute("id");
  }

  _attachShowEvent() {
    const elm = this.children[0];
    elm.addEventListener("click", this._show);
  }

  _close(event) {
    const parent = document.getElementById(event.target.dataset.close);
    const elm = parent.querySelector(parent.dataset.show)
    elm.classList.remove("show");
  
  }
  _show(event) {
    const elm = event.target.parentNode.querySelector(event.target.parentNode.dataset.show);
    elm.classList.add("show");
  }
}
const initComponents = () => {
  customElements.define('jj-modal', JJModal);
}