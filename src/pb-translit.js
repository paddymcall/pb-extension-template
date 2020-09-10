import { LitElement, html, css } from 'lit-element';
import { pbMixin } from '@teipublisher/pb-components/src/pb-mixin';
import { translate } from "@teipublisher/pb-components/src/pb-i18n";
import '@polymer/paper-button';
import '@polymer/iron-icons';

/**
 * A component with a button which copies the contained content to the clipboard.
 * Use for the typical 'quote this content as' hints on a webpage.
 * 
 * @slot content - contains the actual content to copy to the clipboard
 */
export class PbTranslit extends pbMixin(LitElement) {
        static get properties() {
                return {
                        /**
                         * Label to display above the text to be copied
                         */
                        label: {
                                type: String
                        },
                        ...super.properties
                };
        }

        constructor() {
                super();
                this.label = 'clipboard.label';
        }

        connectedCallback() {
        super.connectedCallback();

        this.subscribeTo('pb-end-update', this._endUpdate.bind(this));
        }

        render() {
                return html`
<div>
<form>
<input type="hidden" name="encode" value="iast"/>
<input type="submit" value="IAST"/>
</form>
<form>
<input type="hidden" name="encode" value="devanagari"/>
<input type="submit" value="देव"/>
</form>
</div>`;
        }

        _endUpdate() {
                console.log("done updating the page");
                document.getElementById('sarit-update').click();
        }

        static get styles() {
                return css`
            :host {
                display: block;
            }
            h3 {
                margin: 0;
                font-size: .85em;
                font-weight: normal;
                color: #3a3a3a;
            }
            div {
                display: flex;
                align-items: center;
                padding: 0 16px;
            }
        `;
        }
}
customElements.define('pb-translit', PbTranslit);
