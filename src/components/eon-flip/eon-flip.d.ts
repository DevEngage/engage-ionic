import '../../../dist/types/stencil.core';
export declare class EngageFlipCard {
    config: any;
    flipType: 'hover' | 'click' | 'button';
    type: 'static' | 'flip' | 'pass';
    visible: number;
    flipSelector: string;
    flipButtonId: string;
    element: HTMLElement;
    private flipCards;
    innerElement: any;
    componentDidLoad(): void;
    initFlipCard(): void;
    getOffset(): number;
    onClick(): void;
    flip(): void;
    render(): JSX.Element;
}
