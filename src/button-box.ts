import {
  LitElement, html, css, customElement, property
} from 'lit-element';

@customElement('button-box')
export class ButtonBox extends LitElement {
  @property()
  label = 'click';
  @property()
  action = 'console/log'
  @property()
  payload = this.label;

  static get styles(){
    return css`
      :root{
        display: block;          
      }
      button{
        text-decoration: none;
        background: transparent;
        color: currentColor;
        border: 1px solid;
        border-color: transparent;
        border-radius: 4px;        
        padding: 4px 8px;
        box-shadow: none;       
      }
      button:hover{
        cursor: pointer;
        background: #ccc;
      }
    `;
  }

  render(){
    return html`
      <button @click="${this.handleClick}"><slot>${this.label}</slot></button>
    `;
  }

  handleClick(e: MouseEvent){
    console.log(`${this.action.split('/').join('.')}(${this.payload})`)
  }
}