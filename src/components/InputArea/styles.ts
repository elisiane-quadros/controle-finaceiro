import styled from 'styled-components';

export const Container = styled.div`
    background-color: #F2F2F2;
    box-shadow: 0px 0px 5px #32D9BA;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
`;
export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`;
export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;
export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid #32D9BA;
    border-radius: 5px;
`;
export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid #32D9BA;
    border-radius: 5px;
`;
export const Button = styled.button`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid #2EA690;
    border-radius: 5px;
    background-color: #2EA690;
    color: #ffff;
    cursor: pointer;

    &:hover {
        background-color: #32D9BA;
        color: #0D0D0D;
    }
`;
