import React, { useContext } from 'react';
import { Guard3Context } from './TechniqueContext';

interface Props {

}

export const Guard3: React.FC<Props> = () => {
    const guard3 = useContext(Guard3Context)
        return (
            <div>{guard3.title}</div>
        );
}