import React from 'react';

import { Container, StatusOption,  Separator, AbsentIcon, DoNotDisturbIcon } from './styles';

const UserStatus: React.FC = () => {
    return (
        <Container>
            <StatusOption>
                <span>
                    <div className="material-icons md-15-avaliable">
                        circle
                    </div> Disponível
                </span>
            </StatusOption>
            <Separator />
            <StatusOption>
                <span>
                    <AbsentIcon /> Ausente
                </span>
            </StatusOption>
            <StatusOption>
                <span>
                    <DoNotDisturbIcon /> Não perturbar
                </span>
                <p>
                    Você não irá receber mais notificações na área de trabalho.
                </p>
            </StatusOption>
            <StatusOption>
                <span>
                    <div className="material-icons md-15-invisible">
                        trip_origin
                    </div> Invisível
                </span>
                <p>
                    Você não aparecerá como disponível, mas terá acesso completo ao Discord.
                </p>
            </StatusOption>
            <Separator />
            <StatusOption>
                <span>
                    <div className="material-icons md-12-custom">
                        emoji_emotions
                    </div> Definir status personalizado
                </span>
            </StatusOption>
        </Container>
    );
};

export default UserStatus;