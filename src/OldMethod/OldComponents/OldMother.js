import React from 'react';
import OldChild from './OldChild';

const OldMother = ( props ) => {
    return (
        <div>
            <OldChild name={ props.name } />
        </div>
    )
}

export default OldMother;
