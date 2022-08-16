import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
    background-color: #536271;
    border-radius: 5px;

    input {
        flex: 1;
        padding: 10px;
        font-size: 18px;
        color: #fff;
        background: transparent;
        outline: none;
        border: 0;

        ::placeholder {
            color: #fff;
        }
    }

    .sendButton {
        padding: 10px;
        background-color: #2C3D55;
        border-radius: 5px;
        cursor: pointer;
    }
`;