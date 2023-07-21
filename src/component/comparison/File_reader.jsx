import React from 'react'
import './file_rider.css'
import getdata from './backend.js'

const File_reader = () => {
  return (
    <comparison>
      <h1>Time complexity</h1>
        <h2>Select :</h2>
        <div class="hello">
            <select name="Sorting-type" id="sorting-type" class="btn">
                <option value="Merge">Merge Sort</option>
                <option value="Insertion">Insertion Sort</option>
                <option value="Bubble">Bubble Sort</option>
                <option value="Selection">Selection Sort</option>
                <option value="Count">Count Sort</option>
            </select>
            <input id="select-file" type="file" class="btn"
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
        </div>
        <button onClick={getdata} class="play">Submit</button>
    <div className='circle'>
      <button className="btn play2">Submit</button>
      <input type="text" id='result' className='play' value="result" />
    </div>
    </comparison>
   
  )
}

export default File_reader