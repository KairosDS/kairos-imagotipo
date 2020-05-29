import { LitElement, html, css } from 'lit-element';

export class KairosImagotipo extends LitElement {
  static get properties() {
    return {
      animation: { type: Boolean },
      timeVelocity: { type: Number, attribute: 'time-velocity' }
    };
  }

  constructor() {
    super();
    this.animation = false;
    this.timeVelocity = 20;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'animation') {
        if (this.animation) {
          this.shadowRoot.querySelector('.logo').classList.add('animation');
        } else {
          this.shadowRoot.querySelector('.logo').classList.remove('animation');
        }
      }
    });
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --local-imagotipo-size: var(--imagotipo-size, 35px);
      }

      .logo {
        width: var(--local-imagotipo-size);
        height: var(--local-imagotipo-size);
      }

      .logo > svg { width: var(--local-imagotipo-size); }

      @keyframes app-logo-spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
  }

  render() {
    const t = this.timeVelocity + 's';
    return html`
      <style>.animation { animation: app-logo-spin infinite ${t} linear; }</style>
      <div class="logo">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 532.6 557.8" style="enable-background:new 0 0 532.6 557.8;" xml:space="preserve">
        <style type="text/css">
          .st0{fill:#FF7900;}
        </style>
        <title>KairósDS - Imagotipo</title>
        <path id="Fill-24" class="st0" d="M322.2,508.7c-106.4,20.8-174.5-34.9-174.5-34.9s50.4-48.5,56.6-57.8
          c43.9,26,102.6,15.4,102.6,15.4c63.6-15.2,89.4-54.1,89.4-54.1l73.9,31.6C444.2,446.1,401.4,493.2,322.2,508.7L322.2,508.7z
          M180.7,225.5c-6.8-3.8-21.4-11.9-39-21.7c26.9-49.5,78.7-80.4,135.1-80.4v45.2c0,0,55.7-3,91,49.1c6.5-4.3,20.6-13.8,37.3-25
          c28.6,43.3,33.8,97.9,14.1,145.8l-41.3-17.2c0,0-14.4,40.7-59.3,59.6c0,0-64,29.6-119.1-23.9l-31.7,32c-11.3-11.3-20.7-24.3-28-38.5
          l39.6-20.8C179.5,329.6,151.2,281.1,180.7,225.5L180.7,225.5z M124.9,306.8l-71.5,37.3C31.9,273,55,208,55,208s54.7,34.6,70.5,39.6
          C119,281.4,124.9,306.8,124.9,306.8L124.9,306.8z M322.2,49.1c72.5,13.6,119.1,64.2,119.1,64.2s-55.6,32.9-67.3,44.8
          c-26.8-21.5-51.9-27.9-51.9-27.9L322.2,49.1z M491.6,368.6c29.7-72.3,21.7-154.6-21.4-219.8L507,124c0,0-71.4-122.1-230.2-124v44.6
          c-15.2,0-30.5,1.5-45.4,4.5c-70,14-126.3,58.4-158.3,116.9C50.8,153.6,34,144.3,34,144.3s-74.5,120.2-3,263l39.4-20.6
          c11,21.4,25.2,41,42.1,58l-31.2,31.5c0,0,76.1,83.8,195.6,81.6c116.6-2.1,210.7-65.9,255.7-172.1L491.6,368.6z"/>
        </svg>
      </div>
    `;
  }
}
customElements.define('kairos-imagotipo', KairosImagotipo);