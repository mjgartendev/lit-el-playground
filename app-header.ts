import {
  LitElement, html, customElement, property
} from 'lit-element';

@customElement('app-header')
export class AppHeader extends LitElement {
  @property()
  title = 'My App';
  @property()
  links = 'one two three';

  render(){
    return html`
      <style>
        :root{display:block}
        header{
          display: flex; 
          align-items: center; 
          justify-content: space-between;
          background: #f1f1f1;
          font-weight: bold; 
        }
        .start{padding-left: .5rem}
        .end{padding-right: .5rem}
        nav{display: flex; justify-content: space-between}
        a, .navlink{
          text-decoration: none; 
          color: seagreen; 
          padding: .75em;
        }
        .navlink:hover{cursor: pointer; background: seagreen; color: white}
      </style>

      <header>
        <section class="start">
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
