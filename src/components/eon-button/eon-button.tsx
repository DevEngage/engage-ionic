import {Component, Event, EventEmitter, Listen, Method, Prop, State, Watch} from '@stencil/core';
import {Size} from "../../types/theme";
// import _ from 'lodash';


/*
* CSS Vars
* --eon-button-*
*
* */

/*
* style object
* {
*
* }
*
* */

/*
* TODO:
* [ ] Make sure button looks good in other themes
* [X] Add eon-icon support when ready
* [ ] add gradient support
* [ ] add floating support
* [ ] add Fixed support
* [ ] add Size support
* [ ] add Radio support
* [ ] add tooltip
* [ ] add toggle
* */

/*
* @Requires
*  - Loading Component
*  - Icon Component
* */

@Component({
  tag: 'eon-button',
  styleUrl: 'eon-button.scss'
})
export class EonButton {
  @Prop({ context: 'config' }) config: any;

  @Prop() disabled: boolean = false;
  @Prop() buttonType: string;
  @Prop() color: string | undefined;
  @Prop() expand: 'block' | 'full' | undefined;
  @Prop() fill: 'clear' | 'default' | 'outline' | 'solid' | undefined;
  @Prop() href: string | undefined;
  @Prop() mode: 'ios' | 'md';
  @Prop() routerDirection: 'back' | 'forward' | 'root';
  @Prop() shape: 'round' | undefined;
  @Prop() size: Size | 'default' | 'large' | 'small' | undefined;
  @Prop() strong: boolean = false;
  @Prop() type: 'button' | 'reset' | 'submit' = 'button';
  /* ICON */
  @Prop() icon: string; // leftIcon
  @Prop() rightIcon: string;
  @Prop() iconSize: string;
  @Prop() preventDefault = false;
  @Prop() stopPropagation = false;
  @Prop() stop = false;
  @Prop() enableToggle = false;

  /* LOADING */
  @Prop() loading = false;
  @Prop() loadingCurrent;
  @Prop() loadingColor;
  @Prop() loadingMin;
  @Prop() loadingMax;
  @Prop() loadingType: 'bar' | 'spinner' | 'full' | 'center' = 'bar';
  /* TOOLTIP */
  @Prop() tooltip: string;
  @Prop() tooltipPosition: 'top' | 'bottom' | 'left' | 'right' = 'bottom';

  @Prop() target: string = '_blank';
  @Prop() onClick: (event) => any;
  @State() _toggleState: boolean = false;
  @State() _loading: boolean = false;
  @State() _loadingCurrent;
  @Event() eonAction: EventEmitter;


  // @Prop() fontSize: string;
  // @Prop() block = false;
  // @Prop() allCaps = true;
  // @Prop() outline = false;
  // @Prop() clear = false;
  // @Prop() rounded = false;
  /* FAB */
  // @Prop() fab = false;
  // @Prop() fabList = [];
  // @Prop() fabDirection = 'down';
  // @Prop() fabOpen = false;
  // @Prop() dropdown = false;
  // @Prop() ripple: boolean | 'center' = null;
  // @State() _ripple: boolean | 'center' = null;
  // @State() _fabOpen = false;

  componentWillLoad() {
    // switch (this.theme)  {
    //   case 'material':
    //     if (_.isNull(this.ripple)) {
    //       this._ripple = true;
    //     }
    // }
    this.watchLoading();
    this.watchLoadingCurrent();
  }
  //
  // @Watch('fabOpen')
  // onFabOpen() {
  //   this._fabOpen = this.fabOpen;
  // }
  //
  // @Watch('ripple')
  // onRipple() {
  //   this._ripple = this.ripple;
  // }

  @Watch('loadingCurrent')
  watchLoadingCurrent() {
    this._loadingCurrent = this.loadingCurrent;
  }

  @Watch('loading')
  watchLoading() {
    this._loading = this.loading;
  }

  @Method('toggle')
  toggle() {
    this._toggleState = !this._toggleState;
  }

  @Method('toggleLoading')
  toggleLoading() {
    this._toggleState = !this._toggleState;
  }

  @Method('startLoading')
  startLoading() {
    this._toggleState = true;
  }

  @Method('endLoading')
  endLoading() {
    this._toggleState = false;
  }

  @Method('setLoadingCurrent')
  setLoadingCurrent(loadingCurrent) {
    this._loadingCurrent = loadingCurrent;
  }

  @Listen('click')
  onParentClick(event) {
    if (this.preventDefault) {
      event.preventDefault();
    }
    if (this.stopPropagation) {
      event.stopPropagation();
    }
    if (this.onClick) {
      this.onClick(event);
    }
    return event;
  }

  // buildBtnClasses() {
  //   let styleClasses = '';
  //
  //   if (this.outline) {
  //     styleClasses += 'btn-' +  'outline-'+ this.context;
  //   } else if (this.clear) {
  //     styleClasses += 'btn-clear';
  //   } else {
  //     styleClasses += 'btn-' + this.context;
  //     if (this.context.search('#') === -1) {
  //       if (this.loading && this.loadingType === 'center') {
  //         styleClasses += ' text-' + this.context;
  //       }
  //     }
  //   }
  //
  //   if (this.rounded) {
  //     styleClasses += ' btn-rounded';
  //   }
  //
  //   if (this.block) {
  //     styleClasses += ' btn-block';
  //   }
  //
  //   if (this.size) {
  //     styleClasses += ' btn-' + this.size;
  //   }
  //
  //   if (this._toggleState) {
  //     styleClasses += ' active';
  //   }
  //
  //   if (this.dropdown) {
  //     styleClasses += ' dropdown-toggle';
  //   }
  //
  //   if (this.fab) {
  //     styleClasses += ' eon-btn-fab';
  //   }
  //
  //   if (!this.allCaps) {
  //     styleClasses += ' eon-btn-ignore-case';
  //   }
  //
  //   return styleClasses;
  // }

  // rippleEffect(e, target = e.target) {
  //   if(target) {
  //     let rect = target.getBoundingClientRect(),
  //       ripple = target.querySelector('.eon-ripple-effect');
  //     if (!ripple) {
  //       ripple = document.createElement('span');
  //       ripple.className = 'eon-ripple-effect';
  //       ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
  //       target.appendChild(ripple);
  //     } else {
  //       ripple.className = 'eon-ripple-effect';
  //     }
  //     switch (this.ripple) {
  //       case 'center':
  //         ripple.style.top = (rect.height / 2 - ripple.offsetHeight / 2 ) + 'px';
  //         ripple.style.left = (rect.width / 2 - ripple.offsetWidth / 2) + 'px';
  //         break;
  //       default:
  //         ripple.style.top = ((e.pageY || e.targetTouches[0].pageY) - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop) + 'px';
  //         ripple.style.left = ((e.pageX || e.targetTouches[0].pageX) - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft) + 'px';
  //     }
  //     ripple.className = 'eon-ripple-effect eon-z-active';
  //     setTimeout(() => target.removeChild(ripple), 800);
  //     return false;
  //   }
  // }

  handleClick() {
    if (this.disabled) return;
    // if (this._ripple) {
    //   this.rippleEffect(event)
    // }

    if (this.enableToggle) {
      this._toggleState = !this._toggleState;
    }
  }

  // getStyle() {
  //   let style = {};
  //   if (this.context.search('#') > -1) {
  //     style = {
  //       ...style,
  //       backgroundColor: this.context
  //     };
  //
  //     if (this.loading && this.loadingType === 'center') {
  //       style = {
  //         ...style,
  //         color: this.context
  //       };
  //     }
  //   }
  //   if (this.textColor) {
  //     style = {
  //       ...style,
  //       color: this.textColor
  //     }
  //   }
  //   if (this.fontSize) {
  //     style = {
  //       ...style,
  //       fontSize: this.fontSize
  //     }
  //   }
  //   return style;
  // }

  getSize(): any {
    switch (this.size) {
      // case 'xs':
      //   return 'extra-small';
      case 'sm':
        return 'small';
      // case 'md':
      //   return 'medium';
      case 'lg':
        return 'large';
      // case 'xl':
      //   return 'extra-large';
      default:
        return this.size;
    }
  }

  renderLoading() {
    return [
      <eon-loading
        class={`button-loading-${this.loadingType}`}
        type={this.loadingType === 'bar' ? 'bar' : 'spinner'}
        frequency={this._loadingCurrent > -1 ?  'determinate' : 'indeterminate'}
        color={this.loadingColor ? this.loadingColor : this.color}
        size="xs"
        current={this._loadingCurrent}
        min={this.loadingMin}
        max={this.loadingMax}
      />
    ];
  }

  renderInner() {
    return [
      // size={this.fontSize}
      this.icon && <eon-icon name={this.icon} size={this.iconSize || this.size} />,
      <slot/>,
      this.rightIcon && <eon-icon name={this.rightIcon} />,
      this._loading && this.loadingType !== 'bar' && this.renderLoading()
    ];
  }

  // renderFabArea(){
  //   if (!this.fab || !this.fabList.length) return null;
  //   let classes = '';
  //   if (this.fabDirection === 'left' || this.fabDirection === 'right'){
  //     classes += 'd-flex flex-row'
  //   }
  //
  //   return(
  //   <div class={
  //     'eng-fab-list ' + 'direction-' + this.fabDirection + ' ' +
  //     (this._fabOpen ? 'd-inline-block': 'd-none') +
  //       ' ' + classes
  //   }>
  //     {this.fabList.map(fab =>
  //       <eng-button fab={true}
  //                   context={fab.context}
  //                   size={fab.size}
  //                   icon={fab.icon}
  //                   preventDefault={fab.preventDefault}
  //                   stopPropagation={fab.stopPropagation}
  //                   onClick={fab.action}
  //       >{fab.name || fab.title}</eng-button>
  //     )}
  //     <slot name="fabList"/>
  //   </div>
  //   )
  // }

  renderButton() {
    // return (
    //   <button
    //     disabled={this.disabled}
    //     type={this.type && this.type === 'submit' ? this.type : null}
    //     class={`btn ${this.buildBtnClasses()} ${this._fabOpen ? 'button-allow-overflow' :''}`}
    //     onClick={e => this.handleClick(e)}
    //     style={this.getStyle()}
    //   >
    //     {this.renderInner()}
    //     {this.renderFabArea()}
    //   </button>
    // );
    //
    return [
      <ion-button
        disabled={this.disabled}
        buttonType={this.buttonType}
        fill={this.fill}
        expand={this.expand}
        color={this.color}
        href={this.href}
        mode={this.mode}
        routerDirection={this.routerDirection}
        shape={this.shape}
        size={this.getSize()}
        strong={this.strong}
        type={this.type}
      >
        {this.renderInner()}
      </ion-button>,
      this._loading && this.loadingType === 'bar' && this.renderLoading()
    ];
  }

  // renderATag() {
  //   return (
  //     <a
  //       class={`btn ${this.buildBtnClasses()} ${this._fabOpen ? 'button-allow-overflow' :''}`}
  //       onClick={e => this.handleClick(e)}
  //       href={this.href}
  //       target={this.target}
  //       style={this.getStyle()}
  //     >
  //       {this.renderInner()}
  //       {this.renderFabArea()}
  //     </a>
  //   );
  // }

  // renderTooltip() {
  //   return (
  //     <eon-tooltip
  //       eonPlacement={this.tooltipPosition}
  //       eonBody={this.tooltip}
  //     >
  //       {this.renderButton()}
  //     </eon-tooltip>
  //   )
  // }

  render() {
    if (this.tooltip) {
      // return this.renderTooltip();
    } else {
      // return this.type === 'a' || this.href ?
      //   this.renderATag()
      //   :
      return this.renderButton()
    }
  }
}

