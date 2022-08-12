import React, { useState } from 'react';
import ReactDOM from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CountryItem from './CountryItem';


const MyModal = ({ show, closeShow, openShow, modalShow, children, continents, languages, filters }) => {


    // const [modalShow, setModalShow] = useState(false)

    // const openShow = () => {
    //     setModalShow(true)
    // }

    // const closeShow = () => {
    //     setModalShow(false)
    // }
    if (!show) return null;

    return (
        <Modal
            show={show}
        // closeShow={closeShow}
        // openShow={openShow}
        >
            {/* {children} */}
            <Modal.Header closeButton
                onClick={closeShow}
            >
                <Modal.Title id="contained-modal-title-vcenter">
                    Страна: {continents}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Язык: {languages}
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={closeShow}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
};

export default MyModal;