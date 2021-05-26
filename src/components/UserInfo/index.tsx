import React from 'react';

import { 
    Container,
    Profile,
    Avatar, 
    UserData, 
    UserControlIcons, 
    MicIcon, 
    HeadphoneIcon, 
    SettingsIcon
} from './styles';

const UserInfo: React.FC = () => {
    return (
        <Container>
            
            <Profile>
                <Avatar />
                <UserData>
                    <strong>
                        Deru
                    </strong>
                    <span>
                        #8244
                    </span>
                </UserData>
            </Profile>

            <UserControlIcons>
                <MicIcon />
                <HeadphoneIcon />
                <SettingsIcon />
            </UserControlIcons>

        </Container>
    );
};

export default UserInfo;