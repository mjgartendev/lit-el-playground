import {
  LitElement, html, css, customElement, property
} from 'lit-element';

@customElement('app-main')
export class AppMain extends LitElement {
  @property({type: String})
  view = 'kanban';
  @property({type: String})
  orientation = 'column';

  static get styles(){
    return css`
      :root{
        display: block;
      }
      main{
        margin: 1rem;
        margin-left: 100px;
        display: flex;
        flex: 1 0 auto;
        justify-content: flex-start;
        align-items: flex-start;
        flex-flow: row nowrap;
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
