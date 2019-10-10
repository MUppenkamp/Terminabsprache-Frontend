import React, { PureComponent } from 'react';
import Headline from './header/headline/Headline';
import Intro from './header/intro/Intro';
import './style.css';
import OngoingPollContainer from './OngoingPoll/OngoingPollContainer';

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            rerender: false
        };
    }

    render() {
        const { rerender } = this.state;
        return (
            <div className="tapp">
                <Headline headline="Terminabsprache"/>
                <Intro intro="Hier kannst Du dich mit deinen Freunden über einen Termin einigen. Egal ob eine Party, ein Klassentreffen, ein wichtiges Meeting. All das kannst Du bei uns regeln!"/>
                {rerender ? <OngoingPollContainer /> : null}
                {this.setState({ rerender: true })}
            </div>
        );
    }
}

export default App;
