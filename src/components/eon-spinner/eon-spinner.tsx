import {Component, Element, Prop, Event, EventEmitter
  // , Method, Watch
} from '@stencil/core';
// import _ from 'lodash';
import {Size} from "../../types/theme";


/* TODO:
*  [ ] Added color changing to indeterminate
*  [ ] Add Crazy mode as a boolean
*  [ ] Add determinate' | 'regular' | 'graph modes (https://materializecss.com/preloader.html)
* */

@Component({
  tag: 'eon-spinner',
  styleUrl: 'eon-spinner.scss'
})
export class EngageSpinner {

  @Prop({ context: 'config' }) config: any;
  @Element() el: HTMLElement;
  // @Prop() current: number = 50;
  // @Prop() min: number = 0;
  // @Prop() max: number = 100;
  // @Prop() showProgress: boolean = false;
  // @Prop() crazy: boolean = false;
  @Prop() duration: number | undefined;
  @Prop() name: 'bubbles' | 'circles' | 'crescent' | 'dots' | 'lines' | 'lines-small' | undefined;
  @Prop() color: string = 'primary';
  @Prop() size: Size | 'fit' = 'md';
  @Prop() paused: boolean = false;
  @Prop() type: 'indeterminate' | 'determinate' | 'regular' | 'graph' | 'ion' = 'indeterminate';
  @Event({eventName: 'eonComplete'}) onComplete: EventEmitter;


  componentDidLoad(): void {
  }

  processHexContext() {
    if (this.color && this.color.search('#') > -1) {
      return {
        borderColor: this.color
      }
    }
    return {};
  }

  processContext(): string {
    let classes = '';
    if (this.color && this.color.search('#') === -1) {
      classes += ' bc-' + this.color;
    }
    return classes;
  }

  renderIndeterminate() {
    return (
      <div class={`preloader-wrapper ${this.size} active`}>
        <div class={`spinner-layer ${this.processContext()}`} style={this.processHexContext()}>
          <div class="circle-clipper left">
            <div class="circle" />
          </div>
          <div class="gap-patch">
            <div class="circle" />
          </div>
          <div class="circle-clipper right">
            <div class="circle" />
          </div>
        </div>
      </div>
    );
  }

  renderDeterminate() {
    return (
      <div class={`preloader-wrapper ${this.size}`}>
        <div class={`spinner-layer ${this.processContext()}`} style={this.processHexContext()}>
          <div class="circle-clipper left">
            <div class="circle" />
          </div>
          <div class="gap-patch">
            <div class="circle" />
          </div>
          <div class="circle-clipper right">
            <div class="circle" />
          </div>
        </div>
      </div>
    );
  }

  renderIonSpinner() {
    return (
      <on-spinner color={this.color} duration={this.duration} name={this.name} paused={this.paused} />
    );
  }

  render() {

    switch(this.type) {
      case 'indeterminate':
        return this.renderIndeterminate();
      // case 'regular':
      //   return this.renderRegular();
      // case 'graph':
      //   return this.renderGraph();
      case 'ion':
        return this.renderIonSpinner();
      default:
        return this.renderDeterminate();
    }
  }
}
