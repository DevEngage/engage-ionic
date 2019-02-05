import {Component, Element, Prop, State, Event, EventEmitter, Method, Watch} from '@stencil/core';
import _ from 'lodash';
import {EngageColor} from "../../global/color";
import { EonProgressInterface } from './eon-progress.interface';


@Component({
  tag: 'eon-progress',
  styleUrl: 'eon-progress.scss'
})
export class EngageProgress {

  @Prop({ context: 'config' }) config: any;
  @Prop({ context: 'engageColor' }) colorService: EngageColor;
  @Element() el: HTMLElement;
  @Prop() current: number | EonProgressInterface | EonProgressInterface[] = 0;
  @Prop() min: number = 0;
  @Prop() max: number = 100;
  @Prop() message: string = '';
  @Prop() classes: string = '';
  @Prop() color: string = 'primary';
  @Prop() autoprogress: boolean = false;
  @Prop() duration: number = 0;
  @Prop() type: 'indeterminate' | 'determinate' | 'regular' | 'ion' = 'determinate';
  @Event({eventName: 'eonComplete'}) onComplete: EventEmitter;

  @State() _current: any;

  componentDidLoad(): void {
  }

  componentWillLoad() {
    this.watchProgressCurrent();
    this.autoProgressCheck();
  }

  @Watch('current')
  watchCurrent() {
    let completed = false;
    let progress: number | EonProgressInterface | EonProgressInterface[] = 0;
    if (_.isNumber(this._current) || _.isString(this._current)) {
      progress = this._current;
      if (parseInt(this._current + '') >= 100) {
        completed = true;
      }
    } else if (this._current && this._current['current']) {
      progress = this._current['current'];
      if (parseInt(this._current['current']) >= 100) {
        completed = true;
      }
    }
    this.onComplete.emit({
      current: this._current,
      progress,
      completed,
    });
  }

  @Method('getProgress')
  getProgress() {
    return this._current;
  }

  @Watch('current')
  watchProgressCurrent() {
    this._current = this.current;
  }

  autoProgressCheck() {
    console.log('this.autoProgress', this.autoprogress);
    if (this.autoprogress && this.duration) {
      this.max = this.duration;
      this.startAutoProgressInterval();
    }
  }

  convertToInt(str): number {
    str = str + '';
    str = str.replace('$', '');
    str = str.replace(',', '');
    str = str.replace('*', '');
    return parseInt(str);
  }

  calcProgress(bar: any) {
    let valueInt = this.convertToInt(bar.current);
    let maxInt = this.convertToInt(bar.max || this.max);
    return (valueInt / maxInt) * 100;
  }

  renderBar(bar: EonProgressInterface | any) {
    const calculated = this.calcProgress(bar);
    return (
      <div
        class={`progress-bar ${bar.classes || ''}`}
        role="progressbar"
        style={{width: `${calculated}%`}}
        aria-valuenow={bar.current}
        aria-valuemin={bar.min || this.min}
        aria-valuemax={bar.max || this.max}
      >{bar.message || ''}</div>
    );
  }

  startAutoProgressInterval() {
    this._current = 0;
    const loadingInterval = setInterval(() => {
      this._current = this._current + 100;
      if (this._current >= this.duration) clearInterval(loadingInterval);
    }, 100)
  }

  renderRegular() {
    if (typeof this._current === 'number') {
      return this.renderBar({
        message: this.message,
        current: this._current,
        min: this.min,
        max: this.max,
        classes: this.classes
      });
    } else if (typeof this._current === 'object' && this._current['length']) {
      const bars = [];
      for (let index in this._current) {
        const bar = this._current[index];
        bars.push(this.renderBar(bar));
      }
      return bars;
    } else if (typeof this._current === 'object') {
      return this.renderBar(this._current);
    }
  }

  renderIndeterminate() {
    // console.log(this.color.classContextBg)
    console.log(this.colorService.classContextBg(this.color, true));

    return (
      <div
        class={`progress-md ${this.colorService.classContextBg(this.color, true)}`}
        style={{...this.colorService.hexContextBg(this.color, true)}}
      >
        <div
          class={`indeterminate ${this.colorService.classContextBg(this.color)}`}
          style={{...this.colorService.hexContextBg(this.color)}}
        />
      </div>
    );
  }

  renderDeterminate() {
    const calculated = this.calcProgress(
      _.isObject(this._current) ? this._current : { current: parseInt(this['_current'] + '') }
      );
    return (
      <div
        class={`progress-md ${this.colorService.classContextBg(this.color, true)}`}
        style={{...this.colorService.hexContextBg(this.color, true)}}
      >
        <div
          class={`determinate ${this.colorService.classContextBg(this.color)}`}
          style={{width: calculated + '%', ...this.colorService.hexContextBg(this.color)}}
        />
      </div>
    );
  }

  render() {

    switch(this.type) {
      case 'indeterminate':
        return this.renderIndeterminate();
      case 'regular':
        return (<div class="progress"> {this.renderRegular()} </div>);
      default:
        return this.renderDeterminate();
    }
  }
}
