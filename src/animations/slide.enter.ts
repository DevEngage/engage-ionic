import { Animation } from '@ionic/core';

/**
 * Slide Enter Animation
 */
export function slideEnterAnimation(AnimationC: Animation, baseEl: HTMLElement, options = {from: 'bottom'}): Promise<Animation> {
  const baseAnimation = new AnimationC();
  const { from } = options;
  let fromAxis = 'translateY';
  let fromVal = '';
  if (from) {
    fromAxis = from === 'bottom' || from === 'left' ? 'translateX' : 'translateY';
    fromVal = from === 'left' || from === 'top' ? '-' : '';
  }

  const backdropAnimation = new AnimationC();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));

  const wrapperAnimation = new AnimationC();
  wrapperAnimation.addElement(baseEl.querySelector('.modal-wrapper'));

  wrapperAnimation.beforeStyles({ 'opacity': 1 })
    .fromTo(fromAxis, `${fromVal}100%`, '0%');

  backdropAnimation.fromTo('opacity', 0.01, 0.4);

  return Promise.resolve(baseAnimation
    .addElement(baseEl)
    .easing('cubic-bezier(0.36,0.66,0.04,1)')
    .duration(400)
    .beforeAddClass('show-modal')
    .add(backdropAnimation)
    .add(wrapperAnimation));
}
