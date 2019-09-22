import React from 'react';
import GetInners from '../toggle/GetInners';
import ShowKeyValue from '../toggle/ShowKeyValue';

import { Container } from '../../ui/styled';


const Engine = ({ data, keyName }) => {
    const isArray = Array.isArray(data);
    const isObject = typeof data === "object";

    return (
        <Container>
            { isObject && <GetInners data={data} keyName={keyName} isArray={isArray} /> } 
            { !isObject && <ShowKeyValue keyName={keyName} value={data} /> }
        </Container>
    );

};

export default Engine;