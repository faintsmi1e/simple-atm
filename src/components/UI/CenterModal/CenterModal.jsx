import { Modal, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import classes from './CenterModal.module.css'
function CenterModal(props) {
  const keys = Object.keys(props.newMoney);
  const navigate = useNavigate();
  const returnToMenu = () => {
    navigate('/');
  };
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Уведомление
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.error ? (
          <>
            <h4 style={{ color: 'red' }}>Ошибка</h4>
            <p>{props.error}</p>{' '}
          </>
        ) : (
          <Card
            bg='success'
            text='light'
            style={{ width: '18rem' }}
            className='mb-2'
          >
            <Card.Body>
              <h4>Полученные купюры:</h4>
              <Card.Text className={classes.ModalText}>
                
                {keys.map((bill) => {
                  return props.newMoney[bill] ? (
                    <>
                      <p className={classes.ModalBill}>{bill} ₽ : </p> <span>{props.newMoney[bill]} шт.</span>
                    </>
                  ) : (
                    ''
                  );
                })}
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </Modal.Body>
      <Modal.Footer>
        {props.error ? (
          <>
            <Button variant='secondary' onClick={returnToMenu}>
              В меню
            </Button>
            <Button variant='danger' onClick={props.onHide}>
              Закрыть
            </Button>
          </>
        ) : (
          <>
            <Button variant='secondary' onClick={returnToMenu}>
              В меню
            </Button>
            <Button variant='success' onClick={props.onHide}>
              Снять еще
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default CenterModal;
