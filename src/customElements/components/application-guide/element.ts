import { LitElement, html, property, eventOptions, PropertyValues } from "../base";

import { OverlayEvent, OverlayEventType } from '../overlay';
import { QuickFactEvent, QuickFactEventType } from '../quick-fact';
import { ApplicationGuideEvent, ApplicationGuideEventType, ApplicationGuideEventDetail } from './events';

import { iconOpen } from './open.svg';
import { iconClose } from './close.svg';

import styles from './element.css';


export interface ApplicationGuideElementProps {
    scope?: string;
}

export class ApplicationGuideElement extends LitElement implements ApplicationGuideElementProps {
    static styles = styles;

    @property()
    scope?: string;

    @property({ type: Boolean, reflect: true })
    active: boolean = false;

    @property({ reflect: true })
    selected?: string;

    toggle() {
        this.active = !this.active;
        // @ts-ignore
        this.renderRoot.querySelector('#popover').style = null;
    }

    render() {
        const { scope, active } = this;
        const fabIcon = active ? iconClose : iconOpen;
        return html`
            <fusion-overlay 
                ?active=${active}
                .scope="${scope}"
                @overlay-selection=${this._handleSelectionChanged}
                @dragover=${e => e.preventDefault()}
            >
                <div id="popover" slot="content" draggable="true" @dragend=${this._handleDragEnd}  @dragstart=${this._handleDragStart}>
                    ${this.renderQuickFact()}
                </div>
                <slot></slot>
                <slot name="fab" @click=${(this.toggle)}>
                    <fusion-button id="fab" round raised size="large">
                        ${fabIcon}
                    </fusion-button>
                </slot>
            </fusion-overlay>
        `;
    }

    renderQuickFact() {
        const { active, selected, scope } = this;
        if (!active) {
            return '';
        }
        return html`
            <fusion-quick-fact
                .scope=${scope}
                .anchor=${selected}
                @quick-fact-show=${this._handleQuickFactShow}
            >
                <span slot="empty">Click on a highlighted area to view a Quickfact or to add a new</span>
            </fusion-quick-fact>
        `;
    }

    protected updated(props: PropertyValues) {
        super.update(props);
        props.has('active') && this._dispatchEvent(this.active
            ? ApplicationGuideEventType.activated
            : ApplicationGuideEventType.deactivated
        );
        props.has('scope') && this._dispatchEvent(ApplicationGuideEventType.scope);
        props.has('selected') && this._dispatchEvent(ApplicationGuideEventType.selection);
    }


    protected _dispatchEvent(type: ApplicationGuideEventType, init?: CustomEventInit<ApplicationGuideEventDetail>) {
        const { scope, active, selected } = this;
        const detail = { ...init?.detail, scope, active, selected }
        const event = new ApplicationGuideEvent(type, { ...init, detail });
        this.dispatchEvent(event);
        return event;
    }

    protected _handleSelectionChanged(e: OverlayEvent<OverlayEventType.selection>) {
        this.selected = e.detail.selected.id;
    }

    protected _handleQuickFactShow(e: QuickFactEvent<QuickFactEventType.show>) {
        this._dispatchEvent(ApplicationGuideEventType.show, {detail: e.detail});
    }

    // @TODO

    protected _dragStart;

    @eventOptions({ capture: false })
    protected _handleDragStart(e: DragEvent) {
        const el = e.currentTarget as HTMLElement;
        this._dragStart = { dY: e.y, dX: e.x, eY: el.offsetTop, eX: el.offsetLeft };
        requestAnimationFrame(() => {
            el.style.bottom = 'auto';
            el.style.right = 'auto';
            el.style.opacity = '0';
        });
    }

    @eventOptions({ capture: false })
    protected _handleDragEnd(e: DragEvent) {
        e.preventDefault();
        const el = e.currentTarget as HTMLElement;
        el.style.top = this._dragStart.eY + (e.y - this._dragStart.dY) + 'px';
        el.style.left = this._dragStart.eX + (e.x - this._dragStart.dX) + 'px';
        el.style.opacity = null;

    }
}

export default ApplicationGuideElement