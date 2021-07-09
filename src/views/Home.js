import React, { useState } from "react";
import { Input, Checkbox, Button, notification  } from 'antd'
import "./home.css";
function HomeComponent() {
  const [result, setResult] = useState(0)
  const [valueInput, setValueInput] = useState([
    {
      value: 0,
      isCheck: false,
    },
    {
      value: 0,
      isCheck: false,
    },
    {
      value: 0,
      isCheck: false,
    },
  ]);

  const openNotification = () => {
    notification.open({
      message: 'Message Error',
      description:
        'Minimal ceklis adalah 2 untuk melakukan operasi perhitungan',
      type: 'error'
    });
  };

  function subtraction(arr) 
 {
  var total = arr[0];
    if (typeof (total) !== 'number') {
      return false;
    }
    for (var i = 1, length = arr.length; i < length; i++)
    {
      if (typeof (arr[i]) === 'number')
      {
        total -= arr[i];
      } 
      else 
      return false;
    }
    return total;
  }

  function checkList(value, index){
    valueInput[index].isCheck = value
    console.log(valueInput)
  }

  function changeInput(value, index){
    valueInput[index].value = Number(value)
  }

  function operatorClicked(type) {
    console.log(valueInput, 'value input')
    const resultFilter = valueInput.filter((datas) => {
      return datas.isCheck
    })
    if (resultFilter === [] || resultFilter.length < 2) {
      openNotification()
    } else {
      console.log(resultFilter, 'res fil')
      switch(type) {
        case 'plus':
          var result = resultFilter.reduce(function(tot, arr) { 
            // return the sum with previous value
            return tot + arr.value;
          
            // set initial value as 0
          },0);
          console.log(result)
          setResult(result)
          break;
        case 'minus':
          const resultSubstricion = subtraction(resultFilter)
          console.log(resultSubstricion, 'result')
          break;
        case 'multiply':
          // code block
          break;
        case 'division':
          // code block
          break;
        default:
          // code block
      }
    }
  }

  return (
    <div className="container-fluid">
      <div className="container mt-5">
        {/* Input Number Section */}
        <div className="input-section">
          {valueInput.map((datas, index) => (
            <div className="row col-lg-4 mt-2">
              <div className="col-10 ">
                <Input onChange={(event) => changeInput(event.target.value, index)} />
              </div>
              <div className="col-2">
                <Checkbox className='pt-1' onClick={(event) => checkList(event.target.checked, index)} />
              </div>
            </div>
          ))}

          {/* Operator Button Section */}
          <div className="row mt-4 col-lg-4 line-bottom">
            <div className="col-2">
              <Button className='semi-circle' onClick={() => operatorClicked('plus')}>+</Button>
            </div>
            <div className="col-2">
              <Button className='semi-circle' onClick={() => operatorClicked('minus')}>-</Button>
            </div>
            <div className="col-2">
              <Button className='semi-circle' onClick={() => operatorClicked('multiply')}>X</Button>
            </div>
            <div className="col-2">
              <Button className='semi-circle' onClick={() => operatorClicked('division')}>/</Button>
            </div>
          </div>

          {/* Result Section*/}
          <div className="d-flex justify-content-between col-lg-3 mx-3 mt-2">
            <h5>Hasil</h5>
            <h5 className="mr-3">{result}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
