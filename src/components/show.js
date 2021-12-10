import { VStack } from '@chakra-ui/react'
import Sort from './algorithms/Sort.js'
import { bubbleSort, selectionSort, mergeSortAnimated } from '../lib/sortFunctions.js'

const sortFunctions = {
  'bubbleSort' : bubbleSort,
  'selectionSort': selectionSort,
  'mergeSort': mergeSortAnimated,
}

export default function Show(props) {
  return (
    <VStack>
      <Sort {...props} sortFunction={sortFunctions[props.func]}/>
    </VStack>
  )
}
