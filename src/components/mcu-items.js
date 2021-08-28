import {
  html,
  css,
  LitElement
} from 'lit';

import mixitup from 'mixitup';

import McuItems from '../data/mcu-items.js';

export class McuItem extends LitElement {
  static get styles() {
    return css `
      #mcu-items-container {
        display: flex;
        flex-wrap: wrap;
      }

      .item {
        margin-bottom: 0px;
      }
    
      .poster {
          width: 200px;
      }
  `;
  }

  static get properties() {
    return {
      items: {
        type: Array
      }
    }
  }

  constructor() {
    super();
    this.items = McuItems;
  }

  render() {
    return html `
      <button type="button" data-sort="default:asc">Sort By MCU Chronological</button>
      <button type="button" data-sort="date:asc">Sort By Date</button>
      <hr>
      <button type="button" data-filter="all">Show All</button>
      <button type="button" data-filter="[data-type='movie']">Hide show</button>
      <hr>
      <div id="mcu-items-container">
        ${this.items.map(
          (item, index) =>
            html`
              <div class="item" data-order="${item.order_position}" data-date="${item.date}" data-type="${item.type}">
                <img class="poster" src="${item.poster}" alt="${item.title}">
              </div>
            `
        )}
      </div>
    `;
  }

  updated() {
    let container = this.shadowRoot.getElementById('mcu-items-container');

    console.log(container);

    let mixer = mixitup(container, {
      selectors: {
        target: '.item'
      },
      controls: {
        enable: false // mixitup is not compatible with shadow-root, to fix that i manually add my event listener.
      },
      animation: {
        duration: 300
      }
    });

    let sortButtons = this.shadowRoot.querySelectorAll('[data-sort]');

    sortButtons.forEach(el => {
      el.addEventListener('click', (event) => {
        let button = event.currentTarget;
        mixer.sort(button.dataset.sort);
      })
    })

    let filterButtons = this.shadowRoot.querySelectorAll('[data-filter]');

    filterButtons.forEach(el => {
      el.addEventListener('click', (event) => {
        let button = event.currentTarget;
        mixer.filter(button.dataset.filter);
      })
    })
  }
}

customElements.define('mcu-items', McuItem);