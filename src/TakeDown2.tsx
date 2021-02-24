import React, { useContext } from 'react';
import { Takedown2Context } from './TechniqueContext';

interface Props {

}

export const TakeDown2: React.FC<Props> = () => {
    const takedown2 = useContext(Takedown2Context)

        return (
            <div>{takedown2?.title}</div>
        );
}