import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-lable")
export class MyLable extends LitElement {
  @property({ type: String })
  title = "Add your title";
  render() {
    return html`
      <span>${this.title}</span>
      <span>New York</span>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      padding: 25px;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      border-radius: 5px;
      gap: 10px;
    }

    span {
      font-size: 20px;
      color: #000;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "my-lable": MyLable;
  }
}
