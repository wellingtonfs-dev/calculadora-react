import Input from './components/Input';
import Button from './components/Button';
import {Container, Content, Row, Column} from './styles'
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operator, setOperator] = useState('');

  const handleOnClear = () => { 
    setCurrentNumber('0');
    setFirstNumber('0');
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  };

  const handleSumNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperator('+');
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(sum.toString());
      setOperator('');
    }
  }

  const handleMinusNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperator('-');
    }else{
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(minus.toString());
      setOperator('');
    }
  }

  const handleMultiplyNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperator('x');
    }else{
      const multiply = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(multiply.toString());
      setOperator('');
    }
  }

  const handleSplitNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperator('/');
    }else{
      const split = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(split.toString());
      setOperator('');
    }
  }

  const handleDel = () =>{
    setCurrentNumber(currentNumber.slice(0, -1));
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operator !== '' && currentNumber !== '0'){
      switch(operator){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case 'x':
          handleMultiplyNumbers();
          break;
        case '/':
          handleSplitNumbers();
          break;
        default:
          break;
      }
    }
  }
  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label='AC' onClick={handleOnClear}/>
          <Button label='DEL' onClick={handleDel}/>          
          <Button label='/' onClick={handleSplitNumbers}/>
        </Row>        
        <Row>
          <Button label='7' onClick={() => handleAddNumber('7')}/>
          <Button label='8' onClick={() => handleAddNumber('8')}/>
          <Button label='9' onClick={() => handleAddNumber('9')}/>
          <Button label='x' onClick={handleMultiplyNumbers}/>
        </Row>        
        <Row>
          <Button label='4' onClick={() => handleAddNumber('4')}/>
          <Button label='5' onClick={() => handleAddNumber('5')}/>
          <Button label='6' onClick={() => handleAddNumber('6')}/>
          <Button label='-' onClick={handleMinusNumbers}/>
        </Row>        
        <Row>
          <Button label='1' onClick={() => handleAddNumber('1')}/>
          <Button label='2' onClick={() => handleAddNumber('2')}/>
          <Button label='3' onClick={() => handleAddNumber('3')}/>
          <Button label='+' onClick={handleSumNumbers}/>
        </Row>       
        <Row>
          <Button label=',' onClick={() => handleAddNumber(',')}/>
          <Button label='0' onClick={() => handleAddNumber('0')}/>          
          <Button label='=' onClick={handleEquals}/>
        </Row>      
      </Content>
    </Container>
  );
}

export default App;
