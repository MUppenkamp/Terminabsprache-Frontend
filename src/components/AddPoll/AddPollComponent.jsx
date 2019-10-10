/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Accordion, Input, TextArea, Button, List, ReceiverInput, ChooseButton } from 'chayns-components';
import ConvertToDate from '../Helper/ConvertToDate';

function AddPollComponent(props) {
    return (
        // <div>
            <Accordion
                head="Hinzufügen"
                icon="ts-plus"
                isWrapped
                defaultOpened
                dataGroup="1"
                // open={props.data.accordionAddPoll}
            >
                <div className="accordion__content">
                    <Input
                        placeholder="Titel"
                        value={props.data.title}
                        onChange={newValue => props.handleChange('title', newValue)}
                        required
                    />
                    <TextArea
                        placeholder="Beschreibung"
                        value={props.data.description}
                        onChange={newValue => props.handleChange('description', newValue)}
                        className="description"
                        autogrow
                    />

                    <List className="DateList">
                        {props.data.dates}
                        <div className="DateButtons">
                            <p>Datum</p>
                            <Button className="choosebutton" onClick={() => { props.dateSelectAddDate(); }}>
                                {ConvertToDate(props.data.timestampAddDate)}
                            </Button>
                        </div>
                    </List>

                        <ReceiverInput
                            placeholder="Person/Gruppe hinzufügen"
                            onlyPersons
                            locationMode
                            groupNameEnabled
                        />
                    {/* <div className="UACGroups">
                        <p>Gruppen</p>
                        <Button
                        className="choosebutton"
                        onClick={() => { props.handleUACGroups(); }}
                        >
                            {props.data.selectedGroup.length > 1 ? `${props.data.selectedGroup.length} Gruppen` : props.data.selectedGroup[0]}
                        </Button>
                    </div> */}

                    <div className="DateButtons deadline">
                        <p>Ablaufdatum</p>
                        <Button className="choosebutton" onClick={() => { props.dateSelectDeadline(); }}>
                            {ConvertToDate(props.data.timestampDeadline)}
                        </Button>
                    </div>


                    <div className="createButton">
                        <ChooseButton onClick={() => { props.createDate(); }}>Abschicken</ChooseButton>
                    </div>
                </div>
            </Accordion>
        // </div>
    );
}

export default AddPollComponent;
