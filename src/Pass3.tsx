import React, { useContext } from 'react';
import { Pass3Context } from './TechniqueContext';

interface Props {

}

export const Pass3: React.FC<Props> = () => {
    const pass3 = useContext(Pass3Context)

        return (
            <div>{pass3?.title}</div>
        );
}