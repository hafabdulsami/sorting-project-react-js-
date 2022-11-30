import React from 'react'
import './tablee.css'
const Tablee = () => {
  return (
    <tablee>
      <div>
        <h2>Table:</h2>
        <div className="tab">
          <table id='mytable' className='tablee'>
            <tr>
              <th>Data Size</th>
              <th>Organization 100</th>
              <th>organization 1000</th>
              <th>organization 10000</th>
              <th>Organization 100000</th>
              <th>organization 500000</th>
            </tr>
            <tr>
              <th>Merge Sort</th>
              <td id='m-1'>0</td>
              <td id='m-2'>0</td>
              <td id='m-3'>0</td>
              <td id='m-4'>0</td>
              <td id='m-5'>0</td>
            </tr>
            <tr>
              <th>Insertion Sort</th>
              <td id='i-1'>0</td>
              <td id='i-2'>0</td>
              <td id='i-3'>0</td>
              <td id='i-4'>0</td>
              <td id='i-5'>0</td>
            </tr>
            <tr>
              <th>Selection Sort</th>
              <td id='s-1'>0</td>
              <td id='s-2'>0</td>
              <td id='s-3'>0</td>
              <td id='s-4'>0</td>
              <td id='s-5'>0</td>
            </tr>
            <tr>
              <th>Bubble Sort</th>
              <td id='b-1'>0</td>
              <td id='b-2'>0</td>
              <td id='b-3'>0</td>
              <td id='b-4'>0</td>
              <td id='b-5'>0</td>
            </tr>
            <tr>
              <th>Insertion Sort</th>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </table>
        </div>
      </div>
    </tablee>
  )
}

export default Tablee