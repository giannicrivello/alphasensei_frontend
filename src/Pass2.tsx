import React, { useContext } from 'react';
import { Pass2Context } from './TechniqueContext';

interface Props {

}

export const Pass2: React.FC<Props> = () => {
    const pass2 = useContext(Pass2Context)
        return (
            <div>{pass2?.title}</div>
        );
}