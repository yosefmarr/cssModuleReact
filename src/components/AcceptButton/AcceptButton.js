//import classes from './AcceptButton.module.css';
import styled from 'styled-components';

const AcceptButton = (props) =>
{
    const MyButton = styled.button`
        background-color: #FFFF;
        color: ${props.colors.color};
        text-align: center;
        cursor: pointer;
        border: 1px solid ${props.colors.color};
        padding: 10px 25px;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        &:hover {
            background-color: ${props.colors.hoverBackground};
            color: ${props.colors.hoverColor};
        }
    `;

    return <MyButton>{props.title}</MyButton>;
}

export default AcceptButton;