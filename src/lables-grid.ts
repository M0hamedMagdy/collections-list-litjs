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
      padding: 25px;
      align-items: center;
      justify-content: left;
      flex-direction: row;
      gap: 10px;

      /* Style */
      border-radius: 5px;
    }

    span {
      font-size: 20px;
      color: #000;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "lables-grid": LabelsGrid;
  }
}
