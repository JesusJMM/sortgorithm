import { VStack } from '@chakra-ui/react'
import Sort from './algorithms/Sort.js'
import { functions as sortFunctions }from '../data/algorithmInfo.js'

export default function Show(props) {
  return (
    <VStack>
      <Sort {...props} sortFunction={sortFunctions[props.func]}/>
    </VStack>
  )
}
