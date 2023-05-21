import mealRecipeFinderIcon from '../../img/meal-recipe-finder-icon.png';

class NavBar extends HTMLElement {
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
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .navigation-bar-content {
          display: block;
          width: 100%;
          background-color: #F9FAFB;
          padding-block: 1rem;
          border-bottom: 1px solid #E5E7EB;
          filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
        }
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-inline: auto;
        }
        .container > img {
          width: 40px;
          height: 40px;
          margin-right: 10px;
        }
        h1 {
          font-weight: 600;
          font-size: 1.7rem;
          color: #111827;
        }
      </style>
        
      <div class="navigation-bar-content">
        <div class="container">
          <img src="${mealRecipeFinderIcon}" alt="Meal Recipe Finder Icon">
          <h1>
            Meal Recipe Finder
          </h1>
        </div>
      </div>
    `;
  }
}

customElements.define('nav-bar', NavBar);
