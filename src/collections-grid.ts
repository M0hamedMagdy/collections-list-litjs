import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import "./collection";
@customElement("collections-grid")
export class CollectionsGrid extends LitElement {
  @property({ type: Array })
  collections = [
    {
      title: "People",
      count: "144",
      mainPhotoSrc: "public/static/img/people_1.png",
      photo1Src: "public/static/img/people_2.png",
      photo2Src: "public/static/img/people_3.png",
      photo3Src: "public/static/img/people_4.png",
    },
    {
      title: "Nature",
      count: "7K",
      mainPhotoSrc: "public/static/img/nature_1.png",
      photo1Src: "public/static/img/nature_2.png",
      photo2Src: "public/static/img/nature_3.png",
      photo3Src: "public/static/img/nature_4.png",
    },
    {
      title: "History",
      count: "431",
      mainPhotoSrc: "public/static/img/history_1.png",
      photo1Src: "public/static/img/history_2.png",
      photo2Src: "public/static/img/history_3.png",
      photo3Src: "public/static/img/history_4.png",
    },
  ];

  render() {
    return html`
      ${this.collections.map(
        (collection) => html`
          <one-collection
            .title=${collection.title}
            .count=${collection.count}
            .mainPhotoSrc=${collection.mainPhotoSrc}
            .photo1Src=${collection.photo1Src}
            .photo2Src=${collection.photo2Src}
            .photo3Src=${collection.photo3Src}
          ></one-collection>
        `
      )}
    `;
  }

  static styles = css`
    :host {
      /* Layout */
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 64px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "collections-grid": CollectionsGrid;
  }
}
