import React,{useEffect} from 'react';
import ModalTemplate from '../components/StoreModal/ModalTemplate';
import StoreMocalContainer from '../containers/StoreModal/StoreMocalContainer';

const StoreModalPage = () => {

  useEffect(() => {
    let top = document.getElementById('top_container') as HTMLDivElement;
    top.style.overflow = 'hidden';
    console.log(document.getElementById('top_container'))
    return () => {
      top.style.overflow = 'visible';
    }
  })
  return (
    <ModalTemplate>
      <StoreMocalContainer/>
    </ModalTemplate>
  )
}

export default StoreModalPage;