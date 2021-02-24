import React, { useContext } from 'react';
import { Guard1Context } from './TechniqueContext';

interface Props {

}

export const Guard1: React.FC<Props> = () => {
    const guard1 = useContext(Guard1Context)

        return (
            <div>{guard1.title}</div>
        );
}