import React, { useContext } from 'react';
import { Guard2Context } from './TechniqueContext';

interface Props {

}

export const Guard2: React.FC<Props> = () => {
    const guard2 = useContext(Guard2Context)

        return (
            <div>{guard2.title}</div>
        );
}