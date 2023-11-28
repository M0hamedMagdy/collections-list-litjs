import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("one-lable")
export class Lable extends LitElement {
  @property({ type: String })
  text = "Add your text";

  render() {
    return html`<span>${this.text}</span>`;
  }

  static styles = css`
    :host {
      /* Layout */
      display: flex;
      padding: 0.625rem; /* 10px */
      align-items: flex-start;
      gap: 0.625rem; /* 10px */

      /* Style */
      border-radius: 0.5rem; /* 8px */
      background: #fff;

      /* Typography */
      color: #0e0e38;
      font-family: "Poppins", sans-serif;
      font-size: 1rem; /* 16px */
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    /* Responsive Design */
    @media (max-width: 37.5rem) {
      /* 600px */
      :host {
        font-size: 0.875rem; /* 14px */
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "one-lable": Lable;
  }
}
