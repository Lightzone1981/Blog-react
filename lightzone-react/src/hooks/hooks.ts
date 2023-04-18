import { useEffect } from 'react';

export const useClickOutside = (ref: any, callback: Function) => {
    
    useEffect(() => {
        const onClick = (e: any) => {
            if (ref.current && !ref.current.contains(e.target))
                if (typeof (e.target.className) === 'string'? e.target.className.split('__')[0] !== 'burger': true )
                    if (typeof (e.target.className) === 'string'? e.target.className !== 'post__modal-button': true ){
                callback()
            }
        }
	    document.addEventListener('click', (e)=>onClick(e));
       
      return () => {
        document.removeEventListener('click', (e)=>onClick(e))
      }
    }, [])
  }