import "./modal.css";
const Modal = ({modalState, category, img}) => {

  
  const closeModalFunc = () => {
    modalState(false)
  }

return (
    <div className='modal-backdrop' onClick={() => closeModalFunc()}>
      <div className="modal">
        <div className="content">
          <div className="text">
            <h4>modal</h4>
            <h3 style={{marginBottom:'1rem'}}>
              { category }
            </h3>
          </div>
          <div className="image-container">
            <img src={img} alt=""  width='100%' height='100%' />
          </div>
        </div>
        <span className="close" onClick={() => closeModalFunc()}>X</span>
      </div>
    </div>
  )
}

export default Modal