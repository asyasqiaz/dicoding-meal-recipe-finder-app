/* eslint no-underscore-dangle: ["error", { "allow": ["_clickEvent"] }] */

import searchIcon from '../../img/search-icon.png';

class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        .search-container {
          max-width: 700px;
          display: flex;
          position: sticky;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
          padding: 20px;
          top: 10px;
          background-color: #F9FAFB;
          border-radius: 999px;
        }
        
        .search-container > img {
          width: 30px;
          height: 30px;
          padding: 16px;
        }

        .search-container > input {
          width: 75%;
          padding: 16px;
          border: 0;
          font-weight: 600;
          background-color: #F9FAFB;
          font-size: 1rem;
          font-family: "Plus Jakarta Sans", sans-serif;
        }
        
        .search-container > input:focus {
          outline: 0;
        }
        
        .search-container > input:focus::placeholder {
          font-weight: 600;
        }
        
        .search-container >  input::placeholder {
          color: #111827;
          font-weight: 500;
        }
        
        .search-container > button {
          width: 25%;
          cursor: pointer;
          margin-left: auto;
          padding: 16px;
          background-color: #8777EF;
          color: white;
          border: 0;
          border-radius: 999px;
          transition: all .15s ease-in;
          font-weight: 600;
          font-size: 1rem;
          font-family: "Plus Jakarta Sans", sans-serif;
        }
        
        .search-container > button:hover {
          border: 2px solid #8777EF;
          background-color: transparent;
          color: #8777EF;
        }

        @media screen and (max-width: 550px){
          .search-container {
            position: static;
          }

          .search-container > img {
            width: 26px;
            height: 26px;
            padding: 12px;
        }

          .search-container > input {
            width: 65%;
            font-size: 0.9rem;
            padding: 12px;
          }
          
          .search-container > button {
            width: 35%;
            padding: 12px;
            font-size: 0.9rem;
          }
        }
        </style>
        
        <div id="search-container" class="search-container">
          <img src="${searchIcon}" alt="Search Icon">
          <input placeholder="Search meal here.." id="searchElement" type="search">
          <button id="searchButtonElement" type="submit">Search</button>
        </div>
      `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
