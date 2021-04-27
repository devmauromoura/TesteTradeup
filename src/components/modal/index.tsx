import React, {useEffect} from 'react';
import Modal from 'react-native-modal';
import {useGeral} from '../../context';
import {Safe} from '../../screens/styles';
import {
  Container,
  Header,
  Title,
  Body,
  BIcon,
  BMessage,
  Button,
  ButtonText,
} from './styles';

const CModal = () => {
  const {cModal, setCModal} = useGeral();

  useEffect(() => {
    if (cModal.timer) {
       setCModal({visible: false});
    }
  }, [5000]);

  const handleClose = () => {
    setCModal({visible: false});
  };

  return (
    <Modal
      isVisible={cModal.visible}
      onBackdropPress={() => handleClose()}
      animationIn="bounceInLeft"
      animationOut="bounceInRight">
      <Safe>
        <Container>
          <Header>
            <Title>{cModal.title}</Title>
          </Header>
          <Body>
            <BIcon name={cModal.icon || 'alert'} />
            <BMessage>{cModal.message}</BMessage>
            <Button onPress={() => handleClose()}>
              <ButtonText>OK</ButtonText>
            </Button>
          </Body>
        </Container>
      </Safe>
    </Modal>
  );
};

export default CModal;
