import React from 'react'

const Modal = ({isVisible , onClose , children}) => {
  if(!isVisible) return null;

  const handleClose = (e) => {
    if(e.target.id === 'wrapper') onClose();
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
      <div className='ww-[600px]  flex flex-col'>
      <button className='text-black text-xl place-self-end relative top-16 right-10 hover:bg-gray-200 p-2 rounded' onClick={() => onClose()}>X</button>
        <div className='bg-white px-44 py-14 rounded-2xl'>
         <div className=''>
           {children}
         </div>
        </div>
      </div>
    </div>
  )
}

export default Modal