import React, { useState } from 'react';

import UserStatus from '../UserStatus'

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
    const [status, setStatus] = useState(false);

    function handleShowStatusOptions() {
        setStatus(!status);
    }

    return (
        <Container>
            
            {status && <UserStatus />}

            <Profile>
                <Avatar onClick={handleShowStatusOptions}/>
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