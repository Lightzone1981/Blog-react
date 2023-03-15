import React from 'react';
import { Buttons } from './components'
import { UserAvatar } from './components/UserAvatar';

const App = () => {
  return (
    <>
    <div className="buttons-container">
     <Buttons/>
    </div>
    
    <UserAvatar username='Evgeniy_Lebedevski'/>
    <UserAvatar username='Vasiliy_Nikolaevich_Pupkin'/>
    
    </>
  )
}

export default App;
