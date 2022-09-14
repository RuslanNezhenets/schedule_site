import React from 'react';
import {Modal} from "react-bootstrap";
import PostForm from "../../PostForm/Discipline/PostForm";
import PostFormUpdate from "../../PostForm/Discipline/PostFormUpdate";

const DisciplineModal = ({show, onHide, create, update, item, updateDiscipline, setModalShow}) => {
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
                    Заполните информацию о дисциплине
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {update
                    ?
                    <PostFormUpdate item={item} updateItem={updateDiscipline} setModalShow={setModalShow}/>
                    :
                    <PostForm create={create}/>
                }
            </Modal.Body>
        </Modal>
    );
};

export default DisciplineModal;