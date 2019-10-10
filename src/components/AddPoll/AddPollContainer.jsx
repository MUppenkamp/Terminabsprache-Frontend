/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React, { PureComponent } from 'react';
import { ListItem, ContextMenu } from 'chayns-components';
import AddPollComponent from './AddPollComponent';
import ConvertToDate from '../Helper/ConvertToDate';
import '../OngoingPoll/OngoingPollContainer';

class AddPollContainer extends PureComponent {
    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            timestampAddDate: '',
            timestampDeadline: '',
            dates: [],
            selectedGroup: ['Auswählen']
        };

        this.handleChange = this.handleChange.bind(this);
        this.dateSelectAddDate = this.dateSelectAddDate.bind(this);
        this.dateSelectDeadline = this.dateSelectDeadline.bind(this);
        this.addDate = this.addDate.bind(this);
        this.createDate = this.createDate.bind(this);
        // this.handleUACGroups = this.handleUACGroups.bind(this);
    }

    componentDidMount() {
        this.setState({ timestampAddDate: Date.now() / 1000 });
        this.setState({ timestampDeadline: Date.now() / 1000 });
    }

    handleChange(name, value) {
        this.setState({ [name]: value });
    }

    dateSelectAddDate() {
        chayns.dialog.advancedDate({
            dateType: chayns.dialog.dateType.DATE_TIME,
            minDate: Date.now() / 1000,
            preSelect: this.state.timestampAddDate
        }).then((data) => {
            this.setState({ timestampAddDate: data.selectedDates[0].timestamp });
        }).then(() => {
            this.addDate();
        });
    }

    dateSelectDeadline() {
        chayns.dialog.advancedDate({
            dateType: chayns.dialog.dateType.DATE_TIME,
            minDate: Date.now() / 1000,
            preSelect: this.state.timestampDeadline
        }).then((data) => {
            this.setState({ timestampDeadline: data.selectedDates[0].timestamp });
        });
    }

    addDate() {
        const [...datesList] = this.state.dates;
        const date = (
            <ListItem
            title={ConvertToDate(this.state.timestampAddDate)}
            key={datesList.length}
            right={(
                <ContextMenu
                    items={[{
                        text: 'Entfernen',
                        icon: 'ts-trash'
                    }]}
                />
                )}
            />
        );
        datesList.push(date);
        this.setState({ dates: datesList });
    }

    createDate() {
        chayns.dialog.confirm('', 'Wir benachrichtigen alle Teilnehmer.', [{
            text: 'OK',
            buttonType: 1
        }]);
        this.setState({ accordionAddPoll: false });
    }

    // async handleUACGroups() {
    //     const uac = [];
    //     const response = await fetch('https://sub50.tobit.com/backend//164983/UserGroup?countUsers=true', {
    //         headers: new Headers({
    //             Authorization: `Bearer ${chayns.env.user.tobitAccessToken}`
    //         })
    //     });

    //     const groups = await response.json();
    //     for (let i = 0; i < groups.length; i++) {
    //         uac.push({
    //             name: `${groups[i].name}`
    //         });
    //     }

    //     const result = await chayns.dialog.select({
    //         title: 'Deine Gruppen',
    //         quickfind: true,
    //         multiselect: true,
    //         list: uac
    //     });

    //     this.setState({ selectedGroup: result.selection.map(group => group.name) });
    // }

    render() {
        return (
            <div>
                <AddPollComponent
                    data={this.state}
                    handleChange={this.handleChange}
                    dateSelectAddDate={this.dateSelectAddDate}
                    dateSelectDeadline={this.dateSelectDeadline}
                    addDate={this.addDate}
                    createDate={this.createDate}
                    handleUACGroups={this.handleUACGroups}
                />
            </div>
        );
    }
}

export default AddPollContainer;
