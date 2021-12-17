import { bubbleSort, selectionSort, mergeSortAnimated } from '../lib/sortFunctions.js'

export const functions = {
  'bubbleSort' : bubbleSort,
  'selectionSort': selectionSort,
  'mergeSort': mergeSortAnimated,
}
export const info = {
  'bubbleSort' : {
    title : "Bubble Sort",
    info: "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.",
    moreInfo :[
      {title: "geeksforgeeks.org", url:"https://www.geeksforgeeks.org/bubble-sort/"},
      {title: "wikipedia.org", url:"https://en.wikipedia.org/wiki/Bubble_sort"}
    ]
  },
  'selectionSort' : {
    title : "Selection Sort",
    info: "The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.",
    moreInfo :[
      {title: "geeksforgeeks.org", url:"https://www.geeksforgeeks.org/selection-sort/"},
      {title: "wikipedia.org", url:"https://en.wikipedia.org/wiki/Selection_sort"}
    ]
  },
  'mergeSort' :{
    title:"Merge Sort",
    info:" Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. ",
    moreInfo:[
      {title: "geeksforgeeks.org", url:"https://www.geeksforgeeks.org/merge-sort/"},
      {title: "wikipedia.org", url:"https://en.wikipedia.org/wiki/Merge_sort"}
    ]
  }
}
