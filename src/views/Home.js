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

    function subtraction(arr, n) {
      let result = arr[0].value;
      for (var i = 1; i < n; i++) {
          result -= arr[i].value;
      }
      return result
    }

    function multiply(arr, n) {
      let result = 1;
      for (var i = 0; i < n; i++) {
          result *= arr[i].value;
      }
      return result
    }

    function division(arr, n) {
      let result = arr[0].value;
      let filterZero = arr.filter((v, i) => {
        return v.value === 0
      })
      // handle when any value === 0
      if (filterZero.length > 0) {
        result = 0
      } else {
        for (var i = 1; i < n; i++) {
          result /= arr[i].value;
      }
      } 
      return result
    }


  function checkList(value, index){
    valueInput[index].isCheck = value
  }

  function changeInput(value, index){
    valueInput[index].value = Number(value)
  }

  function operatorClicked(type) {
    const resultFilter = valueInput.filter((datas) => {
      return datas.isCheck
    })
    if (resultFilter === [] || resultFilter.length < 2) {
      openNotification()
    } else {
      switch(type) {
        case 'plus':
          var result = resultFilter.reduce(function(tot, arr) { 
            return tot + arr.value;
          },0);
          setResult(result)
          break;
        case 'minus':
          const resultSUbstraction = subtraction(resultFilter, resultFilter.length)
          setResult(resultSUbstraction)
          break;
        case 'multiply':
          const multiplyResult = multiply(resultFilter, resultFilter.length)
          setResult(multiplyResult)
          break;
        case 'division':
          const divisionResult = division(resultFilter, resultFilter.length)
          setResult(divisionResult)
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
                <Input defaultValue={0} onChange={(event) => changeInput(event.target.value, index)} />
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
            <h5>Hasil :</h5>
            <h5 className="mr-3">{result}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
