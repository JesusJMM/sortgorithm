import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Link,
  Button,
} from '@chakra-ui/react';
import { info } from '../data/algorithmInfo.js';

export default function SideBar(props) {
  const i = info[props.algorithm]
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{i.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text pb={4} fontWeight="bold">
              {i.info}
            </Text>
            <Text fontWeight="bold">This are some articles that will give you more information about it.</Text>
            {i.moreInfo.map((mi, index) => (<Text fontWeight="bold" key={index}><Link isExternal color="#0085FF" href={mi.url}>{mi.title}</Link></Text>))}
          </ModalBody>
          <ModalFooter >
            <Button onClick={props.onClose} colorScheme="blue">Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
