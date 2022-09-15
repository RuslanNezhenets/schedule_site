import React from 'react';
import {Modal} from "react-bootstrap";
import PostForm from "../../PostForm/Elective/PostForm";
import PostFormUpdate from "../../PostForm/Elective/PostFormUpdate";

const ElectiveModal = ({show, onHide, create, update, item, UpdateElective, setModalShow, activeStudent}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Выберите выборный предмет
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {update
                    ?
                    <PostFormUpdate item={item} updateItem={UpdateElective} setModalShow={setModalShow}/>
                    :
                    <PostForm create={create} activeStudent={activeStudent} updateItem={UpdateElective}/>
                }
            </Modal.Body>
        </Modal>
    );
};

export default ElectiveModal;