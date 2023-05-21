class FooterSection extends HTMLElement {
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
        }
        .footer-content {
          background-color: #F9FAFB;
          width: 100%;
          padding-block: 1rem;
          margin-top: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 1px solid #E5E7EB;
          filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
        }
        p {
          color: #111827;
          font-weight: 600;
        }
      </style>
        
      <div class="footer-content">
        <p>&copy; 2023, Meal Recipe Finder</p>
      </div>
    `;
  }
}

customElements.define('footer-section', FooterSection);
