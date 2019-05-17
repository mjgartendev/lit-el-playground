import {
  LitElement, html, customElement, property
} from 'lit-element';

@customElement('app-drawer')
export class AppDrawer extends LitElement {
  @property({type: Boolean})
  isOpen = true;

  @property({type: Boolean})
  isMini = true;

  @property({type: String})
  items = [];

  render(){
    return html`
      <style>
        :root{
          display:block;
          --drawer-width: 64px;
          --drawer-mini-width: 64px;
          --drawer-bg: #f1f1f1;
        }
        aside{
          display: flex; 
          justify-content: space-between;
          align-items: flex-start;
          background: var(--drawer-bg, #f1f1f1;);
          border-right: 1px solid #ddd;
          position: absolute;
          left: 0;
          height: 100%;
        }
        nav{
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        a, .navlink{
          text-decoration: none; 
          color: mediumseagreen; 
          padding: .75em;
        }
        .navlink:hover{
          cursor: pointer; 
          background: mediumseagreen; 
          color: white
        }
      </style>

      <aside><slot></slot></aside>
    `;
  }

  get navLinks() {
    return this.items.map(l => html`<a class="navlink" href="/${l}">${l}</a>`);
  }
}