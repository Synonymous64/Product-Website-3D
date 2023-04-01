import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';

const generateStyles = (type) => {
    const snap = useSnapshot(state);
    if (type === 'filled') {
        return {
            backgroundColor: 'purple',
            color: snap.color
        }
    }

}

const CustomButton = ({ type, title, handleClick, customStyles }) => {
    return (
        <button
            className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
            style={generateStyles(type)}
            onClick={handleClick}
        >
            {title}
        </button>
    )
}

export default CustomButton;