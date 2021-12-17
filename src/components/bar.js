import { Input, HStack, Stack, InputGroup, InputLeftAddon, Select, IconButton } from '@chakra-ui/react'
import { FaUndoAlt, FaPlay, FaPause, FaInfo } from 'react-icons/fa'

export default function Bar(props) {
  return (
    <Stack p={3} spacing={4} direction={['column', 'row']}>
      <Select variant="filled" onChange={props.setFunction}>
        <option value="bubbleSort">Buble Sort</option>
        <option value="selectionSort">Selection Sort</option>
        <option value="mergeSort">Merge Sort</option>
      </Select>
      <InputGroup>
        <InputLeftAddon>Elements</InputLeftAddon>
        <Input variant="filled" placeholder="1" value={props.elements} type="number" onChange={props.setElements} />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Target</InputLeftAddon>
        <Input variant="filled" placeholder="1" type='number' value={props.target} onChange={props.setTarget} />
      </InputGroup>
      <HStack spacing={3} justifyContent="center">
        <IconButton onClick={props.setRestart} icon={<FaUndoAlt/>} />
        <IconButton
          onClick={props.setPlay}
          icon={props.play ?
            <FaPause /> :
            <FaPlay />}
        />
        <IconButton onClick={props.toggleSidebar} icon={<FaInfo />}/>
      </HStack>
    </Stack>
  )
}
