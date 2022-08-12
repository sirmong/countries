// import React, { useState } from 'react';
// import MyModal from './Modal';
// import useApi from './useApi';

// const ModalList = () => {
//     const { countries } = useApi()
//     const [ModalFilters, setModalFilters] = useState('')
//     const [modalShow, setModalShow] = useState(false)
//     const openShow = () => {
//         setModalShow(true)
//     }

//     const closeShow = () => {
//         setModalShow(false)
//     }
//     const allModal = countries.map((mod, index) => {
//         return <MyModal
//             show={modalShow}
//             modalFilters={ModalFilters}
//             closeShow={closeShow}
//             openShow={openShow}
//             currencies={mod.region}
//             key={index + 1}
//         />
//     })
//     return (
//         <div>
//             {allModal}

//         </div>
//     );
// };

// export default ModalList;