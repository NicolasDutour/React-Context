import React from 'react';
import { FamilyConsumer } from "./FamilyContext";

const NewChild = () => {
    return (
            <FamilyConsumer>
                {context => <p>{context}</p>}
            </FamilyConsumer>
    )
}

export default NewChild;
