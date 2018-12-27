import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'eon-input',
  styleUrl: 'eon-input.scss'
})
export class EonInput {
  @Prop() accept: string | undefined;
  @Prop() autocapitalize: string;
  @Prop() autocomplete: 'off' | 'on';
  @Prop() autocorrect: 'off' | 'on';
  @Prop() autofocus: boolean;
  @Prop() bindSelector = '[eon-bind]';
  @Prop() errorSelector = '[eon-error]';

  render() {
    return (
      <ion-input
        accept={this.accept}
        autocapitalize={this.autocapitalize}
        autocomplete={this.autocomplete}
        autocorrect={this.autocorrect}
        autofocus={this.autofocus}
      />
    );
  }
}
