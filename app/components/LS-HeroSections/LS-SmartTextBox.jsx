import React from 'react'

 
export default function LSSmartTextBox(SmartTextBox) {
  return (
    <>
        <div className="stbContainer">
            <div className={`${SmartTextBox.STBSize}`}>
                
              {SmartTextBox.STBContent}
                
            </div>
        </div>
        
    </>
  )
}
