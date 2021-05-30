import styled from "styled-components";
import { Moon, MinusCircle } from "styled-icons/heroicons-solid";

export const Container = styled.div`
    grid-area: UI;

    width: 220px;
    height: auto;

    background-color: var(--status);
    border-radius: 3px;
    
    padding: 0 8px;

    position: absolute;
    top: -300px;
` ;


export const StatusOption = styled.div`
    display: flex;
    flex-direction: column;

    color: var(--gray);

    margin-top: 8px;
    padding: 6px 10px;
    font-size: 14px;

    border-radius: 2px;

    > span {
        display: flex;
        align-items: center;
    }

    > p {
        margin-top: 5px;
        margin-left: 23px;

        font-size: 12px;
    }

    > span svg, span div {
        margin-right: 8px;
    }

    .material-icons.md-15-avaliable { font-size: 12px; color: #3BA55C; }
    .material-icons.md-15-invisible { font-size: 12px; color: #747F8D; }
    .material-icons.md-12-custom { font-size: 12px;  }
    
    transition: color .1s, background-color .1s;

    &:last-child {
        margin-bottom: 8px;
    }

    &:hover {
        background-color: #5C6FB1;
        color: var(--white);

        > svg {
            color: var(--white);
        }
    }
`;

export const Separator = styled.div`
    width: 100%;
    height: 1px;
    
    background-color: #262729;
`;

export const AvaliableIcon = styled.div``;

export const AbsentIcon = styled(Moon)`
    width: 13px;
    height: 13px;
    color: #FAA61A;

    transform: scaleX(-1);
`;

export const DoNotDisturbIcon = styled(MinusCircle)`
    width: 13px;
    height: 13px;
    color: #ED4245;
`;

export const InvisibleIcon = styled.div``;
