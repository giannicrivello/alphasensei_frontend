import React, { useContext } from 'react';
import { PassingContext } from './TechniqueContext';

interface Props {

}

export const Pass1: React.FC<Props> = () => {
    const pass1 = useContext(PassingContext)

        return (
            <div>{pass1?.title}</div>
        );
}