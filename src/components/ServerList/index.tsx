import React from "react";

import ServerButton from '../ServerButton'

import { Container, Separator } from './styles'

const ServerList: React.FC = () => {
    return (
        <Container>

            <ServerButton isHome/>

            <Separator />
            
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton mentions={1}/>
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton mentions={12}/>
            <ServerButton />
            <ServerButton />
            <ServerButton mentions={205} hasNotifications/>
            <ServerButton />
            <ServerButton />

        </Container>
    );
};

export default ServerList;