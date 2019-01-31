
import _ from "lodash";

export class EngageColor {

  private static instance: EngageColor;

  darkBackgrounds = [
    "primary",
    "danger",
    "warning",
    "success",
    "info",
    "default",
    "secondary",
    "elegant",
    "unique",
    "dark-green",
    "red",
    "pink",
    "purple",
    "deep-purple",
    "indigo",
    "blue",
    // "light-blue",
    "cyan",
    "teal",
    "green",
    "light-green",
    "lime",
    // "yellow",
    "amber",
    "orange",
    "deep-orange",
    "brown",
    "grey",
    "blue-grey",
    // "white",
    "black",
    "dark",
  ];

  static isHexColor(color) {
    return color && color.search('#') > -1;
  }

  static isRgbColor(color) {
    return color && color.search('rgb') > -1;
  }

  hexContextBg(context, lighter = false): object {
    if (EngageColor.isHexColor(context)) {
      return {
        backgroundColor: lighter ? this.shadeColor(context, 40) : context
      }
    }
    return {};
  }

  classContextBg(context, lighter = false): string {
    if (!EngageColor.isHexColor(context)) {
      if (lighter) {
        return ' bg-' + context + '-lighter';
      }
      return ' bg-' + context;
    }
    return '';
  }

  hexContextText(context, lighter = false): object {
    if (EngageColor.isHexColor(context)) {

      return {
        color: lighter ? this.shadeColor(context, 40) : context
      }
    }
    return {};
  }

  classContextText(context, lighter = false): string {
    if (!EngageColor.isHexColor(context)) {
      if (lighter) {
        return ' text-' + context + '-lighter';
      }
      return ' text-' + context;
    }
    return '';
  }

  shadeColor(color: string, percent: number) {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    R = R * (100 + percent) / 100;
    G = G * (100 + percent) / 100;
    B = B * (100 + percent) / 100;

    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;

    let RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
    let GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
    let BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

    return "#" + RR + GG + BB;
  }

  isBgDark(bgColor) {
    if (!bgColor) return false;
    if (_.includes(this.darkBackgrounds, bgColor)) return true;
    return (parseInt(bgColor.replace('#', ''), 16) > 0xffffff / 2);
  }

  determineTextColor(bgColor) {
    if (!bgColor || !bgColor.length) return 'text-dark';
    return this.isBgDark(bgColor) ? 'text-light' : 'text-dark';
  }

  determineBgColor(bgColor) {
    return this.isBgDark(bgColor) ? 'bg-light' : 'bg-dark';
  }

  getElementBgColor(element: any) {
    return element.style.backgroundColor;
  }

  addElementBgColor(element: any, context) {
    if (EngageColor.isHexColor(context) || EngageColor.isRgbColor(context)) {
      element.style.backgroundColor = context;
    } else {
      element.classList.add('bg-' + context);
    }
    element.classList.remove('text-light');
    element.classList.remove('text-dark');
    element.classList.add(this.determineTextColor(context));
  }

  removeElementBgColor(element: any, context, defaultContext) {
    console.log(defaultContext);
    if (EngageColor.isHexColor(context) || EngageColor.isRgbColor(context)) {
      element.style.backgroundColor = '';
    } else {
      element.classList.remove('bg-' + context);
    }
    if (defaultContext) {
      this.addElementBgColor(element, defaultContext);
    }
    element.classList.remove('text-light');
    element.classList.remove('text-dark');
    element.classList.add(this.determineTextColor(defaultContext));
  }

  static getInstance() {
    if (!EngageColor.instance)  {
      EngageColor.instance = new EngageColor();
    }
    return EngageColor.instance;
  }
}

export let engageColor = EngageColor.getInstance();
