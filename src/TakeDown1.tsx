import React, { useContext } from 'react';
import { Takedown1Context } from './TechniqueContext';

interface Props {

}

export const TakeDown1: React.FC<Props> = () => {
    const takedown1 = useContext(Takedown1Context)
        return (
            <div>{takedown1.title}</div>
        );
}