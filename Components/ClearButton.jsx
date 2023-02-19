import './ClearButton.css';

const ClearButton = ({ eraseInput }) => {

    const clearDisplay = () => {
        eraseInput('');
    }

    return (
        <button className='ClearButton' onClick={() => clearDisplay()}> Clear </button>
    )
};

export default ClearButton;