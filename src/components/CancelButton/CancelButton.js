import classes from  './CancelButton.module.css';
// import Radium from 'radium';

const CancelButton = (props) =>
{
    /*
    const redStyle = {
        backgroundColor: '#FFFF',
        color: '#ef5350' ,
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        border: '1px solid #ef5350' ,
        padding: '10px 25px',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        transitionDuration: '0.4s',
        ':hover': {
            backgroundColor: '#f44336',
            color: 'white'
        }
    };*/

    return <button className={classes.button}>{props.title}</button>
}

export default CancelButton;