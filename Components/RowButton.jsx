import './RowButton.css';

const RowButton = ( {addInput, value} ) => {

    const handleClick = (value) => {
        addInput(value);
    }

    return (
        <button className='RowButton' onClick={() => handleClick(value)}> {value} </button>
    )
}

export default RowButton;