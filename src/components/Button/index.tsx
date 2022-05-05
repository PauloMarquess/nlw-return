import { ReactNode } from 'react';
import { ContainerButton } from './style';

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <ContainerButton>
            <button onClick={onClick}>{children}</button>
        </ContainerButton>
    );
};
