/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-plusplus */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Accordion, List, Checkbox, Badge, ContextMenu } from 'chayns-components';
import AddPollContainer from '../AddPoll/AddPollContainer';

function OngoingPollComponent() {
    const participants = [];
    const user = (
            <div className="user">
                <div>
                    <img className="image" src={`https://sub60.tobit.com/u/${chayns.env.user.id}`}/>
                </div>
                <div className="subline">
                    <p>{chayns.env.user.name}</p>
                </div>
            </div>
            );
    for (let i = 0; i < 20; i++) {
        participants.push(user);
    }

    return (
        <div>
            <Accordion
                head="Meine Termine"
                open
                fixed
                noIcon
                onSearch={() => console.log}
                searchPlaceholder="Suche Person"
            >
                <Accordion
                head="Geburtstagsfeier"
                dataGroup="1"
                right={(
                    <div className="badgeAndCheckbox">
                        <Badge>10. Okt. 14:00 Uhr</Badge>
                        <ContextMenu
                            items={[{
                                text: 'Entfernen',
                                icon: 'ts-trash'
                            }]}
                        />
                    </div>
                    )}
                isWrapped
                >
                <div className="accordion__content">
                    <h3>Beschreibung</h3>
                    <p>Dies ist eine Testbeschreibung.</p>
                </div>
                    <div className="checkboxAndParticipants">
                        <List>
                            <Accordion
                                right={(
                                    <div className="badgeAndCheckbox">
                                        <div><Badge>20 Tn.</Badge></div>
                                        <div className="checkboxes" />
                                    </div>
                                    )}
                                head="10. Okt. 14:00 Uhr"
                                isWrapped
                            >
                                <div className="accordion__content">
                                    <div className="participantList">
                                        {participants}
                                    </div>
                                </div>
                            </Accordion>

                            <Accordion
                                dataGroup="1"
                                right={(
                                    <div className="badgeAndCheckbox">
                                        <div><Badge>10 Tn.</Badge></div>
                                        <div className="checkboxes" />
                                    </div>
                                    )}
                                head="12. Okt. 14:00 Uhr"
                                isWrapped
                                disabled
                            >
                                <div className="accordion__content">
                                    <div className="participantList">
                                        {participants}
                                    </div>
                                </div>
                            </Accordion>
                        </List>
                    </div>
                </Accordion>

                <Accordion
                head="Meeting"
                right={(
                    <div className="badgeAndCheckbox">
                        <Badge>3 T 13 Std 34 Min</Badge>
                        <ContextMenu
                            items={[{
                                text: 'Entfernen',
                                icon: 'ts-trash',
                            },
                            {
                                text: 'Bearbeiten',
                                icon: 'ts-cog'
                            }]}
                        />
                    </div>
                    )}
                isWrapped
                dataGroup="1"
                >
                <div className="accordion__content">
                    <h3>Beschreibung</h3>
                    <p>Dies ist eine Testbeschreibung.</p>
                </div>
                    <div className="checkboxAndParticipants">
                        <List>
                            <Accordion
                                right={(
                                    <div className="badgeAndCheckbox">
                                        <div><Badge>20 Tn.</Badge></div>
                                        <div className="checkboxes">
                                            <Checkbox onChange={console.log} toggleButton/>
                                        </div>
                                    </div>
                                    )}
                                head="10. Okt. 14:00 Uhr"
                                isWrapped
                            >
                                <div className="accordion__content">
                                    <div className="participantList">
                                        {participants}
                                    </div>
                                </div>
                            </Accordion>

                            <Accordion
                                right={(
                                    <div className="badgeAndCheckbox">
                                        <div><Badge>10 Tn.</Badge></div>
                                        <div className="checkboxes">
                                            <Checkbox onChange={console.log} toggleButton/>
                                        </div>
                                    </div>
                                    )}
                                head="11. Okt. 14:00 Uhr"
                                isWrapped
                            >
                                <div className="accordion__content">
                                    <div className="participantList">
                                        {participants}
                                    </div>
                                </div>
                            </Accordion>
                        </List>
                    </div>
                </Accordion>
                <AddPollContainer />
            </Accordion>
        </div>
    );
}

export default OngoingPollComponent;
