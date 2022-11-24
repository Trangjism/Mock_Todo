import React from 'react';
import Button from '../Button';
import './ModalBox.css'

export default function ModalBox({erro, hideModalErro}) {
  return (
    <div className='modal'>
        <div className='modal-content'>
            <p>{erro}</p>
            <Button onClick={hideModalErro} deleteButton>Close</Button>
        </div>
    </div>
  )
}
