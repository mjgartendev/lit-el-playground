import { html, css, LitElement, customElement, property } from "lit-element";

@customElement('word-tag')
export class WordTag extends LitElement {
   @property({ type: String })
   keywords = "one two three";

   static get styles() {
    return css`
        :host {
          display: inline-flex;
          cursor: default;         
        }
        .tag {
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          padding: 3px 7px;
          border-radius: 10px;
          background-color: #2196F3;
          background: linear-gradient(115deg, #2196F3 0%, #8FCDFF 100%);
          background-attachment: fixed;
          font-size: .9rem;
          color: #FFFFFF;
          margin-left: 4px;
        }
        .word {
          font-weight: bold;
          text-transform: lowercase;
        }
        .wrapper{
          display: flex;
          flex-flow: row wrap;
          background: #f1f1f1;
          padding: 8px;
          border-radius: 5px;
        }
        .remove-icon {
          padding: 3px;
          cursor: pointer;
          margin-left: 5px;
          font-weight: bold;
        }
        input{
          text-align: center;
          border: 1px solid #ccc;
          border-radius: 10px;
          background: #ddd;
          width: 40px;
        }
    `;
    }

   render() {
     return html`
     <div class="wrapper">
        <input placeholder="..." @change="${this.handleInput}"/>
        ${this.tagList}
      </div>
     `
   }

  get tagList(){
    const tokens = this.keywords.split(' ');
    const list = tokens.map(word => html`
        <div class="tag">
          <span class="word">
            ${word}
          </span>
          <span class="remove-icon @click="${this.handleClick}">
            &times;
          </span>
        </div>`);
    return list;
  }
  handleInput(e){
    this.keywords += ` ${e.target.value}`;
    e.target.value = '';
  }

  handleClick(e: MouseEvent){
    console.log(e.target)
  }
}