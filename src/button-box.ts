import {
  LitElement, html, css, customElement, property
} from 'lit-element';

@customElement('button-box')
export class ButtonBox extends LitElement {
  @property({type: String})
  label = 'click';
  @property({type: String})
  action = ''
  @property({type: String})
  payload = '';

  static get styles(){
    return css`
      :root{
        display: block;          
      }
      button{
        text-decoration: none;
        background: #fff;
        color: mediumseagreen;
        border: 1px solid;
        border-color: transparent;
        border-radius: 4px;        
        padding: 4px 8px;
        box-shadow: none;       
      }
      button:hover{
        cursor: pointer;
        border-color: currentColor;
      }
    `;
  }

  render(){
    return html`
      <button data-action="${this.action}" data-payload="${this.payload}" @click="${this.handleClick}">
        <slot>${this.label}</slot>
      </button>
    `;
  }

  handleClick(e: MouseEvent){
    const payloadJSON = `{${this.payload.split('&').join(', ')}}`;
    console.log(`${this.action.split('/').join('.')}(${payloadJSON})`)
  }
}