import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("one-lable")
export class Lable extends LitElement {
  @property({ type: String })
  text = "Add your text";

  render() {
    return html`<span>${this.text}</span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "one-lable": Lable;
  }
}
