import './RowButton.css';

const RowButton = ( props ) => {
    return (
        <button className='RowButton' onClick={() => props.addInput(props.value)}> {props.value} </button>
    )
}

export default RowButton;