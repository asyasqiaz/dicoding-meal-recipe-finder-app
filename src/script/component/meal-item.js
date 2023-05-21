/* eslint no-underscore-dangle: ["error", { "allow": ["_meal"] }] */

class MealItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set meal(meal) {
    this._meal = meal;
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

          :host {
            display: block;
            margin-bottom: 24px;
            margin-inline: auto;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            overflow: hidden;
            background-color: #F9FAFB;
          }

          .meal-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
            object-position: center;
          }

          .meal-info {
            padding: 24px;
          }
          
          .meal-info > h3 {
            font-weight: 600;
            text-decoration: underline solid #8777EF 3px;
            color: #111827;
            font-size: 1.5rem;
          }

          .meal-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            color: #111827;
          }

          @media screen and (max-width: 550px){
            :host {
              margin-inline: auto;
            }
          }
        </style>
        
        <img class="meal-image" src="${this._meal.strMealThumb}" alt="Meal Image">
        <div class="meal-info">
          <h3>${this._meal.strMeal}</h3>
          <p>${this._meal.strInstructions}</p>
        </div>
      `;
  }
}

customElements.define('meal-item', MealItem);
