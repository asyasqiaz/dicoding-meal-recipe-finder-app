import foodIllustration from '../../img/food-illustration.png';

class DescriptionSection extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        :host {
          display: block;
          margin-inline: auto;
        }

        .illustration {
            display: flex;
            justify-content: center;
        }

        .illustration > img {
            width: 40%;
            height: 40%;
        }

        h2 {
            font-weight: 600;
            font-size: 1.6rem;
            color: #111827;
            text-align: center;
        }
        .text-underline {
            position: relative;
          }

         .text-underline:after {
            content: '';
            position: absolute;
            width: 100%;
            border-top: solid 3px #8777EF;
            left: 0;
            bottom: -10px;
            border-radius: 50%;
            height: 8px;
        }
      </style>
        
      <div class="description-content">
        <div class="illustration">
            <img src="${foodIllustration}" alt="Food Illustration">
        </div>
        <h2>Find Any Recipe You Want and Create A <span class="text-underline">Magic</span></h2>
      </div>
    `;
  }
}

customElements.define('description-section', DescriptionSection);
