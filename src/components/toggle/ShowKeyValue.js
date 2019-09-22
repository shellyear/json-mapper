import React from 'react';
import { Wrapper, Key, StringValue, NumberValue } from '../../ui/styled';


const ShowKeyValue = ({ keyName, value }) => {
    const isString = typeof value === "string";
    return (
        <Wrapper>
            <Key>{keyName} {keyName && ":"}</Key> 
            { isString && <StringValue>{`"${value}"`}</StringValue> }
            { !isString && <NumberValue>{value}</NumberValue> } 
        </Wrapper>
    );
};

export default ShowKeyValue;