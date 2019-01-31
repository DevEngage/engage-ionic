import { Animation } from '@ionic/core';

/**
 * Slide Leave Animation
 */
export function slideLeaveAnimation(AnimationC: Animation, baseEl: HTMLElement, options = {from: 'bottom'}): Promise<Animation> {
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
  const wrapperEl = baseEl.querySelector('.modal-wrapper');
  wrapperAnimation.addElement(wrapperEl);
  const wrapperElRect = wrapperEl!.getBoundingClientRect();

  wrapperAnimation.beforeStyles({ 'opacity': 1 })
    .fromTo(fromAxis, '0%', `${fromVal}${window.innerHeight - wrapperElRect.top}px`);

  backdropAnimation.fromTo('opacity', 0.4, 0.0);

  return Promise.resolve(baseAnimation
    .addElement(baseEl)
    .easing('ease-out')
    .duration(250)
    .add(backdropAnimation)
    .add(wrapperAnimation));
}
