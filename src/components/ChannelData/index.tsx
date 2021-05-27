import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messageRef.current;

        if(div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messageRef])

    return (
        <Container>
            <Messages ref={messageRef}>
                {
                    Array.from(Array(30).keys()).map((n) => (
                        <ChannelMessage
                            key={n}
                            author="Deru"
                            date="26/05/2021"
                            content="Discord é muito BRABO!!!"
                        />
                    ))
                }

                <ChannelMessage 
                    author="Diego Fernandes"
                    date="26/05/2021"
                    content={
                        <>
                            <Mention>@Deru</Mention> 
                        </>
                    }
                    hasMention
                    isBot
                />
                     
                
            </Messages>    

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;