import '../../../dist/types/stencil.core';
export declare class EonIcon {
    config: any;
    el: HTMLElement;
    name: string;
    size: string;
    color: string;
    src: string;
    fa: 'fas' | 'far' | 'fal' | 'fab' | '';
    brand: 'fa' | 'nf' | 'ion' | '';
    type: 'static' | 'animated' | 'hover';
    animation: 'rock' | 'ring' | 'vertical' | 'horizontal' | 'flash' | 'bounce' | 'spin' | 'float' | 'pulse' | 'shake' | 'tada' | 'passing' | 'burst';
    transition: 'none' | 'bounceIn' | 'bounceInDown' | 'bounceInLeft' | 'bounceInRight' | 'bounceInUp' | 'fadeIn' | 'fadeInDown' | 'fadeInDownBig' | 'fadeInLeft' | 'fadeInLeftBig' | 'fadeInRight' | 'fadeInRightBig' | 'fadeInUp' | 'fadeInUpBig' | 'flipInX' | 'flipInY' | 'lightSpeedIn' | 'rotateIn' | 'rotateInDownLeft' | 'rotateInDownRight' | 'rotateInUpLeft' | 'rotateInUpRight' | 'rollIn' | 'zoomIn' | 'zoomInDown' | 'zoomInLeft' | 'zoomInRight' | 'zoomInUp' | 'slideInDown' | 'slideInLeft' | 'slideInRight' | 'slideInUp';
    transitionDelay: string;
    transitionPosition: 'top' | 'middle' | 'bottom';
    element: any;
    content: any;
    scrollAmount: any;
    positionTop: any;
    positionLeft: any;
    documentScrollHandler: any;
    componentDidLoad(): void;
    addTransition(): void;
    addScrollListener(): void;
    checkScroll(transitionStartPoint: any, ev?: any): void;
    removeScrollListener(): void;
    getPosition(el: any): void;
    getIconStyle(): {
        fontSize: string;
        color: string;
    };
    getIconClass(): "" | "eon-hide";
    renderFaIcon(): JSX.Element;
    renderIonIcon(): JSX.Element;
    renderNfIcon(): JSX.Element;
    renderPass(): JSX.Element;
    render(): JSX.Element;
    componentDidUnload(): void;
}
