import React from 'react'

//Ugyanaz, mint a PureComponent, csak function componentekhez!
function MemoComp() {
    console.log('Memo Render')
    return (
        <div>
            MemoComp
        </div>
    )
}

export default React.memo(MemoComp)
