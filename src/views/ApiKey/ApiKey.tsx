import React from "react";
import Logo from "../../components/Logo/Logo";
import { ViewContainer } from "./ApiKey.styles";
import Paragraph from "../../components/Paragraph/Paragraph";
import Input from "../../components/Input/Input";

const ApiKey = () => {
    return (
        <ViewContainer>
            <Logo size="large" />
            <Paragraph align="center">
                Before starting configure
                <br /> your{" "}
                <a href="https://platform.openai.com/account/api-keys">
                    OpenAI api key
                </a>
            </Paragraph>
            <Input value={""} onChange={console.log} placeholder="Api key" />
        </ViewContainer>
    );
};

export default ApiKey;
