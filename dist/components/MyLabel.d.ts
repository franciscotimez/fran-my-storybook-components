/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
    * Texto a mostrar en la label.
    */
    label: string;
    /**
    * Tamanio de la Label
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Capitaliza el texto de la label.
    */
    allCaps?: boolean;
    /**
    * Color del texto de la label.
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Color del custom texto de la label.
    */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: MyLabelProps) => JSX.Element;
