import React from 'react';
import {Modal} from "react-bootstrap";
import PostForm from "../../PostForm/Student/PostForm";
import PostFormUpdate from "../../PostForm/Student/PostFormUpdate";

const StudentModal = ({show, onHide, create, update, item, updateStudent, setModalShow}) => {
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
                    Заполните информацию о студенте
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {update
                    ?
                    <PostFormUpdate item={item} updateItem={updateStudent} setModalShow={setModalShow}/>
                    :
                    <PostForm create={create}/>
                }
            </Modal.Body>
        </Modal>
    );
};

export default StudentModal;