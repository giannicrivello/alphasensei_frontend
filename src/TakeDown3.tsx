import React, { useContext } from 'react';
import { Takedown3Context } from './TechniqueContext';

interface Props {

}

export const TakeDown3: React.FC<Props> = () => {
    const takedown3 = useContext(Takedown3Context)

        return (
            <div>{takedown3?.title}</div>
        );
}