
// import _ from "lodash";

export interface EngageIPaletteLevels {
  one?: string;
  two?: string;
  three?: string;
  four?: string;
  five?: string;
}
export interface EngageIPalette {
  name?: string;
  hex?: string;
  rgba?: string;
  gradient?: string;
  bg?: string;
  text?: string;
  lighter?: EngageIPaletteLevels;
  darker?: EngageIPaletteLevels;
  accent?: EngageIPaletteLevels;
}

export class EngageColorBuilder {

  private static instance: EngageColorBuilder;

  defaultColors: EngageIPalette[] = [
    {
      name: 'primary',
      hex: '',
      rgba: '',
      lighter: {
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
      },
    },
    // "danger",
    // "warning",
    // "success",
    // "info",
    // "default",
    // "secondary",
    // "elegant",
    // "unique",
    // "dark-green",
    // "red",
    // "pink",
    // "purple",
    // "deep-purple",
    // "indigo",
    // "blue",
    // // "light-blue",
    // "cyan",
    // "teal",
    // "green",
    // "light-green",
    // "lime",
    // // "yellow",
    // "amber",
    // "orange",
    // "deep-orange",
    // "brown",
    // "grey",
    // "blue-grey",
    // // "white",
    // "black",
    // "dark",
  ];

  shades = [
    { name: 'black', hex: '#000000' },
    { name: 'dark', hex: '#343a40', },
    { name: 'light', hex: '#f8f9fa', },
    { name: 'white', hex: '#FFFFFF', },
    { name: 'transparent', hex: 'transparent', },
  ];

  social = [
    { name: 'fb', hex: '#3B5998' },
    { name: 'tw', hex: '#55ACEE' },
    { name: 'gplus', hex: '#DD4B39' },
    { name: 'yt', hex: '#ED302F' },
    { name: 'li', hex: '#0082CA' },
    { name: 'pin', hex: '#C61118' },
    { name: 'ins', hex: '#2E5E86' },
    { name: 'git', hex: '#333' },
    { name: 'comm', hex: '#30CFC0' },
    { name: 'vk', hex: '#4C75A3' },
    { name: 'dribbble', hex: '#EC4A89' },
    { name: 'so', hex: '#ffac44' },
    { name: 'slack', hex: '#56b68b' },
    { name: 'email', hex: '#4B515D' },
  ];

  /*
  * THEMES Supported
  * [ ] Bootstrap
  * [ ] Ionic
  * */

  setRoot(property, value) {
    document.documentElement.style.setProperty(property, value);
  }

  getCssVar(element, property) {
    // return element.style.getPropertyValue(property);
    return getComputedStyle(element).getPropertyValue(property);
  }

  setCssVar(element, property, value) {
    return element.style.setProperty(property, value);
  }

  buildSubColor(name, subName, sub) {
    return `
      ${sub.one ? `--eng-color-rgba-${name}-${subName}-1: ${sub.one} !default;` : ``}
      ${sub.one ? `--eng-color-rgba-${name}-${subName}-2: ${sub.one} !default;` : ``}
      ${sub.one ? `--eng-color-rgba-${name}-${subName}-3: ${sub.one} !default;` : ``}
      ${sub.one ? `--eng-color-rgba-${name}-${subName}-4: ${sub.one} !default;` : ``}
      ${sub.one ? `--eng-color-rgba-${name}-${subName}-5: ${sub.one} !default;` : ``}
    `;
  }

  buildColor(color) {
    return `
      --eng-color-${color.name}: ${color.hex} !default;
      --eng-color-${color.name}-rgba: ${color.rgba} !default;
      --eng-color-${color.name}-gradient: ${color.rgba} !default;
      --eng-color-${color.name}-bg: ${color.bg} !default;
      --eng-color-${color.name}-text: ${color.text} !default;
      ${color.lighter ? this.buildSubColor(color.name, 'lighter', color.lighter) : ``}
      ${color.darker ? this.buildSubColor(color.name, 'darker', color.darker) : ``}
      ${color.accent ? this.buildSubColor(color.name, 'accent', color.accent) : ``}
    `;
  }

  buildMaterialDesignColors() {
    return this.defaultColors.map((color) => this.buildColor(color));
  }

  static getInstance() {
    if (!EngageColorBuilder.instance)  {
      EngageColorBuilder.instance = new EngageColorBuilder();
    }
    return EngageColorBuilder.instance;
  }
}

export let engageColor = EngageColorBuilder.getInstance();
