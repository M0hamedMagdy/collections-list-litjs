import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./lable.ts";

@customElement("lables-grid")
export class LabelsGrid extends LitElement {
  @property({ type: Array })
  labels: Array<String> = [
    "Profile",
    "New York",
    "Relaxing",
    "Person",
    "Fashion",
  ];

  render() {
    return html`
      ${this.labels.map(
        (lable: any) => html`<one-lable text="${lable}"></one-lable>`
      )}
    `;
  }

  static styles = css`
    :host {
      /* Layout */
      display: flex;
      padding: 1.5625rem; /* 25px */
      align-items: center;
      justify-content: left;
      flex-direction: row;
      gap: 0.625rem; /* 10px */
      width: 100%;

      /* Style */
      border-radius: 0.3125rem; /* 5px */
    }

    span {
      font-size: 1.25rem; /* 20px */
      color: #000;
    }

    /* Responsive Design */
    @media (max-width: 37.5rem) {
      /* 600px */
      :host {
        justify-content: center;
      }

      span {
        font-size: 1rem; /* 16px */
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "lables-grid": LabelsGrid;
  }
}
