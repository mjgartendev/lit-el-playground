import {
  LitElement, html, css, customElement, property
} from 'lit-element';

@customElement('toggle-box')
export class ToggleBox extends LitElement {
  @property({type: String})
  name = 'toggle';

  @property({type: String})
  trueDisplay = 'so true';

  @property({type: String})
  falseDisplay = 'nope';
  
  @property({ type: Boolean })
  isTrue = true;

  static get styles() {
    return css`
      root{display: block;}
      input{ display: none;}
      label{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: .5rem;
        border-radius: 4px;
        cursor: pointer;
      }
    `;
  }

  render() {
    return html`
      <div>
        <label for="${this.name}">
          <input id="${this.name}"
                type="checkbox" 
                ?checked="${this.isTrue}" 
                @change="${() => this.isTrue = !this.isTrue}"
          />
          ${this.isTrue
        ? html`${this.trueDisplay}`
        : html`${this.falseDisplay}`
      }
        </label>
      </div>
    `;
  }
}
