import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("one-collection")
export class Collection extends LitElement {
  @property({ type: String })
  title = "";
  @property({ type: String })
  count = "";
  @property({ type: String })
  mainPhotoSrc = "";
  @property({ type: String })
  photo1Src = "";
  @property({ type: String })
  photo2Src = "";
  @property({ type: String })
  photo3Src = "";

  render() {
    return html`
      <div class="container">
        <div class="photos_group">
          <picture>
            <img src=${this.mainPhotoSrc} alt="Main Photo" class="main_photo" />
          </picture>
          <div class="photos-grid">
            <img src=${this.photo1Src} alt="Photo 1" class="photo" />
            <img src=${this.photo2Src} alt="Photo 2" class="photo" />
            <img src=${this.photo3Src} alt="Photo 3" class="photo" />
          </div>
        </div>
        <div class="description">
          <span class="title">${this.title}</span>
          <div class="svg_count">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="32"
              viewBox="0 0 31 32"
              fill="none"
            >
              <g clip-path="url(#clip0_2_22)">
                <path
                  d="M19.375 10.8333H19.3871"
                  stroke="#2C3E50"
                  stroke-width="1.9375"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.9583 5.66675H9.04167C6.90157 5.66675 5.16667 7.40164 5.16667 9.54175V22.4584C5.16667 24.5985 6.90157 26.3334 9.04167 26.3334H21.9583C24.0984 26.3334 25.8333 24.5985 25.8333 22.4584V9.54175C25.8333 7.40164 24.0984 5.66675 21.9583 5.66675Z"
                  stroke="#2C3E50"
                  stroke-width="1.9375"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.16667 19.8751L10.3333 14.7084C10.9224 14.1416 11.5906 13.8431 12.2708 13.8431C12.951 13.8431 13.6193 14.1416 14.2083 14.7084L20.6667 21.1667"
                  stroke="#2C3E50"
                  stroke-width="1.9375"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.0833 18.5833L19.375 17.2916C19.9641 16.7248 20.6323 16.4264 21.3125 16.4264C21.9927 16.4264 22.6609 16.7248 23.25 17.2916L25.8333 19.875"
                  stroke="#2C3E50"
                  stroke-width="1.9375"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_22">
                  <rect
                    width="31"
                    height="31"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span class="count">${this.count}</span>
          </div>
        </div>
      </div>
    `;
  }

  static styles = css`
    div.container {
      /* Layout */
      width: 24.3125rem; /* 389px */
      height: 27.5625rem; /* 441px */
      display: flex;
      padding: 1.5rem; /* 24px */
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem; /* 24px */

      /* style */
      border-radius: 2rem; /* 32px */
      background: #fff;
    }

    div.photos_group {
      /* Layout */
      width: 24.3125rem; /* 389px */
      height: 23.8125rem; /* 381px */
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem; /* 16px */
    }

    img.main_photo {
      /* Layout */
      width: 24.3125rem; /* 389px */
      height: 16.75rem; /* 268px */

      /* Style */
      border-radius: 1.5rem; /* 24px */
      object-fit: cover;
    }

    div.photos-grid {
      /* Layout */
      display: flex;
      gap: 1rem; /* 16px */
    }

    img.photo {
      /* Layout */
      width: 7.4375rem; /* 119px */
      height: 6.0625rem; /* 97px */
      object-fit: cover;
      object-position: top;

      /* Style */
      border-radius: 1.5rem; /* 24px */
    }

    div.description {
      /* Layout */
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    span.title {
      /* Layout  */
      flex: 1 0 0;

      /* Typography */
      color: #0e0e38;
      font-family: Poppins;
      font-size: 1.5rem; /* 24px */
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    div.svg_count {
      /* Layout */
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem; /* 8px */
    }

    span.count {
      color: #0e0e38;
      font-family: Poppins;
      font-size: 1rem; /* 16px */
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    /* Responsive Design */
    @media (max-width: 37.5rem) {
      /* 600px */
      div.container {
        width: 100%;
        height: auto;
      }

      div.photos_group {
        width: 100%;
        height: auto;
      }

      img.main_photo {
        width: 100%;
        height: auto;
      }

      div.photos-grid {
        width: 100%;
      }

      img.photo {
        width: calc(
          (100% - 2rem) / 3
        ); /* subtract the total gap space and divide by 3 */
        height: auto;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "one-collection": Collection;
  }
}
