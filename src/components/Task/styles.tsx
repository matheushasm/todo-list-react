import styled from 'styled-components';

type ContainerProps = {
    checked: boolean;
}

export const Container = styled.div( ({checked}: ContainerProps) => (
    `
    width: 100%;
    display: flex;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 18px;
    background-color: #536271;
    border-radius: 5px;


    .task {
        flex: 1;
        display: flex;
    }
    .task input {
        width: 20px;
        height: 20px;
        margin-right: 20px;
    }
    .task div {
        line-height: 25px;
        text-decoration: ${checked ? 'line-through' : 'auto'};
    }

    .clear{
        padding: 10px;
        background-color: #f00;
        border-radius: 5px;
        cursor: pointer;
    }
    `
))