/* eslint-disable eol-last */
/* eslint-disable no-useless-constructor */
import React, { PureComponent } from 'react';
import OngoingPollComponent from './OngoingPollComponent';

class OngoingPollContainer extends PureComponent {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <OngoingPollComponent />
            </div>
        );
    }
}

export default OngoingPollContainer;