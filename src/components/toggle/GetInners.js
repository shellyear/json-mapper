import React from 'react'
import Engine from '../root/Engine';
import Uncover from './Uncover';


const GetInners = ({ data, keyName, isArray }) => {
    const inners = Object.values(data).map((el, i) => (
        <Engine 
            key={i}
            data={el}
            keyName={!isArray && Object.getOwnPropertyNames(data)[i]}
        />
    ));

    return (
        <Uncover 
            inners={inners}
            keyName={keyName}
            isArray={isArray}
        />
    );
};

export default GetInners;
