import React from 'react'
import './defination.css';
import {MdOutlineMergeType} from 'react-icons/md'
import {BiSort} from 'react-icons/bi'
import {FaSort} from 'react-icons/fa'
import {FiFilter} from 'react-icons/fi'
import {SlSpeedometer} from 'react-icons/sl'
import {ImTree} from 'react-icons/im'

const body = () => {
  return (
    <body>
      <div className="defination">
        <div className="row-1 1">
          <div>
            <MdOutlineMergeType size={50}/>
          <h2>Merge Sort</h2>
          <p>The Merge Sort algorithm is a sorting algorithm that is 
            based on the Divide and Conquer paradigm. In this algorithm, 
            the array is initially divided into two equal halves and then they are combined in a sorted manner......</p>
          <a href="https://www.geeksforgeeks.org/merge-sort/" target={"_blank"}><b>Learn more</b></a>
          </div>
          <div>
            <BiSort size={50}/>
          <h2>Insertion Sort</h2>
          <p>Insertion sort is a simple sorting algorithm that works 
            similar to the way you sort playing cards in your hands. 
            The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed.....</p>
          <a href="https://www.geeksforgeeks.org/insertion-sort/" target={"_blank"}><b>Learn more</b></a>
          </div>
        </div>
        <div className="row-1 2">
          <div>
            <FaSort size={50}/>
          <h2>Bubble Sort</h2>
          <p>Bubble Sort is the simplest sorting algorithm that works
             by repeatedly swapping the adjacent elements if they are 
             in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity.....</p>
          <a href="https://www.geeksforgeeks.org/merge-sort/" target={"_blank"}><b>Learn more</b></a>
          </div>
          <div>
            <FiFilter size={50}/>
          <h2>Selection Sort</h2>
          <p>The selection sort algorithm sorts an array by repeatedly finding the minimum element
             (considering ascending order) from the unsorted part and putting it at the beginning......</p>
          <a href="https://www.geeksforgeeks.org/selection-sort/" target={"_blank"}><b>Learn more</b></a>
          </div>
        </div>
        <div className="row-1 3">
          <div>
            <SlSpeedometer size={50}/>
          <h2>Quick Sort</h2>
          <p>Like Merge Sort, QuickSort is a Divide and Conquer algorithm
            .It picks an element as a pivot and partitions the given array
             around the picked pivot. There are many different versions of quickSort that pick pivot in ways..... </p>
          <a href="https://www.geeksforgeeks.org/quick-sort/" target={"_blank"}><b>Learn more</b></a>
          </div>
          <div>
            <ImTree size = {50}/>
          <h2>Heap Sort</h2>
          <p>Like Mer
            ge Sort, QuickSort is a Divide and Conquer algorithm.
             It picks an element as a pivot and partitions the given array 
             around the picked pivot. There are many different versions of quickSort that pick pivot  in..... </p>
          <a href="https://www.geeksforgeeks.org/heap-sort/" target={"_blank"}><b>Learn More</b></a>
          </div>
        </div>
      </div>
    </body>
  )
}

export default body