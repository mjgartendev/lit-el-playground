import {
  LitElement, html, customElement, property
} from 'lit-element';

@customElement('app-header')
export class AppHeader extends LitElement {
  @property({type: String})
  title = 'My App';
  @property({type: String})
  links = 'one two three';

  render(){
    return html`
      <style>
        :root{
          display:block
        }
        header{
          display: flex; 
          justify-content: space-between;
          background: #f1f1f1;
          font-weight: bold;
          border-bottom: 1px solid #ddd;
        }
        .start{
          padding-left: .5rem; 
          display: flex;
          align-items: center;
        }
        .end{
          padding-right: .5rem
        }
        nav{
          display: flex; 
          justify-content: space-between;
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

      <header>        
        <section class="start"> 
          <slot></slot>         
          <a href="/">${this.title}</a>
        </section>
        <section class="end">
          <nav>${this.navLinks}</nav>
        </section>
      </header>
    `;
  }

  get navLinks() {
    const links = this.links.split(' ');
    return links.map(l => html`<a class="navlink" href="/${l}">${l}</a>`);
  }
}
