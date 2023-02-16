import './CalculatorBody.css'
import CalculatorRow from './CalculatorRow';
import CalculatorDisplay from './CalculatorDisplay';
import RowButton from './RowButton';
import ClearButton from './ClearButton';
import { useState } from 'react';

const CalculatorBody = () => {

    const [ input, setInput ] = useState('');

    const addInput = (value) => {
        setInput(input + value);
    };


    return (
        <div className='CalculatorBody'>
            <CalculatorDisplay input = {input} />
            <CalculatorRow>
                <RowButton value = {1} onClick = {addInput}>  </RowButton>
                <RowButton value = {2} onClick = {addInput}>  </RowButton>
                <RowButton value = {3} onClick = {addInput}>  </RowButton>
                <RowButton value = {'+'}>  </RowButton>
            </CalculatorRow>
            <CalculatorRow>
                <RowButton value = {4}>  </RowButton>
                <RowButton value = {5}>  </RowButton>
                <RowButton value = {6}>  </RowButton>
                <RowButton value = {'-'}>  </RowButton>
            </CalculatorRow>
            <CalculatorRow>
                <RowButton value = {7}>  </RowButton>
                <RowButton value = {8}>  </RowButton>
                <RowButton value = {9}>  </RowButton>
                <RowButton value = {'*'}>  </RowButton>
            </CalculatorRow>
            <CalculatorRow>
                <RowButton value = {'='}>  </RowButton>
                <RowButton value = {0}>  </RowButton>
                <RowButton value = {'.'}>  </RowButton>
                <RowButton value = {'/'}>  </RowButton>
            </CalculatorRow>
            <ClearButton />
      </div>
    )
};

export default CalculatorBody;