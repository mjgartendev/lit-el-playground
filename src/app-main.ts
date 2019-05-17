import {
  LitElement, html, css, customElement, property
} from 'lit-element';

@customElement('app-main')
export class AppMain extends LitElement {
  @property({type: String})
  view = 'toggle';
  @property({type: String})
  orientation = 'column';

  static get styles(){
    return css`
      :root{
        display: block;
      }
      main{
        margin: 1rem;
        display: flex;
        flex: 1 1 auto;
        justify-content: space-around;
        align-items: flex-start;
        flex-flow: row wrap;
      }
      main.row {
        flex-direction: row;
      }
      main.column {
        flex-direction: column;
      }
    `;
  }
  render(){
    return html`
    <main class="${this.orientation}">
      <slot></slot>
    </main>
    `;
  }
}
