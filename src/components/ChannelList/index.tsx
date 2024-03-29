import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>

                <AddCategoryIcon />
            </Category>

            
            <ChannelButton channelName="anonymous"  selected/>
            <ChannelButton channelName="trabalho" />
            <ChannelButton channelName="lolzinho" />
            <ChannelButton channelName="csgo" />
            <ChannelButton channelName="valorant" />
             
        </Container>
    );
};

export default ChannelList;