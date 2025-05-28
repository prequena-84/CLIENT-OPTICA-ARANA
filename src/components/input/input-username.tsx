import React from "react";
import type { IInputGroupText } from "../../interface/IInput/IInput-group-text";

const InputUsername:React.FC<IInputGroupText> = ( {name,placeHolder,arialLabel,onChange,value} ) => {

    return (
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input 
                name={name} 
                value={value}
                onChange={onChange} 
                type="text" 
                className="form-control"
                placeholder={placeHolder} 
                aria-label={arialLabel} 
                aria-describedby="basic-addon1"
            />
        </div>
    );
};

export default InputUsername;