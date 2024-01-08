import { Component, createElement } from "react";
import { createApp, Component as VueComponent, App } from "vue";

let lastId = 0;
const newId = () => `icon-example-${lastId++}`;

type IconExampleProps = {
    component: VueComponent,
    prop?: Record<string, unknown>;
};

export class IconExample extends Component<
    IconExampleProps,
    {
        app: App;
        domId: string;
    }
> {
    constructor(props: IconExampleProps) {
        super(props);
        this.state = {
            app: createApp(props.component, props.prop),
            domId: newId(),
        };
    }
    render(): JSX.Element {
        return createElement('div', {
            id: this.state.domId,
        });
    }
    componentDidMount(): void {
        this.state.app.mount(`#${this.state.domId}`);
    }
}