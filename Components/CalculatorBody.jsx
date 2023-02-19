import './CalculatorBody.css';
import CalculatorDisplay from './CalculatorDisplay';
import RowButton from './RowButton';
import ClearButton from './ClearButton';
import { useState } from 'react';

const CalculatorBody = () => {

    const [ input, setInput ] = useState('');

    const addInput = (value) => {
        setInput(input + value);
    };

    const eraseInput = () => {
        setInput('');
    }


    return (
        <div className='CalculatorBody'>
            <CalculatorDisplay input = {input} />
            <div>
                <RowButton value = {1} addInput = {addInput}>  </RowButton>
                <RowButton value = {2} addInput = {addInput}>  </RowButton>
                <RowButton value = {3} addInput = {addInput}>  </RowButton>
                <RowButton value = '+' addInput={addInput}>  </RowButton>
            </div>
            <div>
                <RowButton value = {4} addInput = {addInput}>  </RowButton>
                <RowButton value = {5} addInput = {addInput}>  </RowButton>
                <RowButton value = {6} addInput = {addInput}>  </RowButton>
                <RowButton value = {'-'} addInput={addInput}>  </RowButton>
            </div>
            <div>
                <RowButton value = {7} addInput = {addInput}>  </RowButton>
                <RowButton value = {8} addInput = {addInput}>  </RowButton>
                <RowButton value = {9} addInput = {addInput}>  </RowButton>
                <RowButton value = {'*'} addInput={addInput}>  </RowButton>
            </div>
            <div>
                <RowButton value = {'='} addInput = {addInput}>  </RowButton>
                <RowButton value = {0} addInput = {addInput}>  </RowButton>
                <RowButton value = {'.'} addInput = {addInput}>  </RowButton>
                <RowButton value = {'/'} addInput={addInput}>  </RowButton>
            </div>
            <ClearButton eraseInput = {eraseInput} />
      </div>
    )
};

export default CalculatorBody;