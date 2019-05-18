import { html, css, LitElement, customElement, property } from "lit-element";

@customElement('word-tag')
export class WordTag extends LitElement {
   @property({ type: String })
   keywords = '1 2 3';

   static get styles() {
    return css`
        :host {
          display: inline-flex;
          cursor: default;         
        }
        .tag {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: space-evenly;
          padding: 2px 7px;
          border-radius: 5px;
          background-color: mediumseagreen;
          background: linear-gradient(150deg, mediumseagreen 0%, seagreen 100%);
          font-size: .9rem;
          color: #FFFFFF;
          margin-left: 4px;
        }
        .word {
          font-weight: bold;
        }
        .wrapper{
          display: flex;
          flex-flow: row nowrap;
          flex: 1 1 auto;
          background: #f3f3f3;
          padding: 8px;
          border-radius: 5px;
          overflow-y: auto;
          max-width: 700px;
        }
        .remove-icon {
          background: transparent;
          color: white;
          border: none;
          box-shadow: none;
          cursor: pointer;
          font-weight: bold;
          text-align: right;
          padding: 2px;
          margin-left: 4px;
        }
        input{
          text-align: center;
          font-weight: bold;
          border: 1px solid #ccc;
          box-shadow: inset 0 2px 1px -2px rgba(0,0,0,0.15);
          border-radius: 5px;
          background: #ddd;
          min-width: 40px;
          width: 70px;
        }
    `;
    }

   render() {
     return html`
     <div class="wrapper">
        <input placeholder="+" @change="${this.handleInput}"/>
        ${this.tagList}
      </div>
     `
   }

  get tagList(){
    return this.keywords.split(' ')
      .map(word => html`
        <div class="tag">
          <span class="word">
            ${word}
          </span>
          <button class="remove-icon" data-id="${word}" @click="${this.handleClick}">
            &times;
          </button>
        </div>`
      );
  };

  handleInput(e){
    this.keywords += ` ${e.target.value}`;
    e.target.value = '';
    return e.target.value;
  };

  handleClick(e){
    return this.keywords = this.keywords
      .split(' ')
      .filter(word => word !== e.target.dataset.id)
      .join(' ')
  };
}