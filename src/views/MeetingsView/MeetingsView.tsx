import React from "react";
import { useStorage } from "../../helpers/storage";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import { CardsContainer } from "./MeetingsView.styles";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";

const MeetingsView = () => {
    const { state } = useStorage();
    const navigate = useNavigate();
    const meetings = state.meetings || {};

    return (
        <>
            <Header action="settings" />
            <Title align="left">Last meetings</Title>
            <CardsContainer>
                {Object.keys(meetings).map((key) => (
                    <Card
                        onClick={() => {
                            navigate(`/meeting/${key}`);
                        }}
                        title={meetings[key].meetingTopic}
                        date={meetings[key].createdAt}
                    />
                ))}
            </CardsContainer>
        </>
    );
};

export default MeetingsView;
