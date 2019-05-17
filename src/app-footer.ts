import {
  LitElement, html, css, customElement, property
} from 'lit-element';

@customElement('app-footer')
export class AppFooter extends LitElement {
  @property({type: Boolean})
  clipped = false;

  static get styles(){
    return css`
      :root{
        display: block;          
      }
      footer{
        grid-area: bottom;
        background: #f1f1f1;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 32px;
      }      
    `;
  }

  render(){
    return html`
    <footer>
      <slot>footer</slot>
    </footer>
    `;
  }
}
