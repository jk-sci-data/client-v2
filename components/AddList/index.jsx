import React from 'react';
import add from "../../dist/img/add.png";
import "./AddList.sass";

const AddList = ({ label }) => {
    return (
        <button className="frame" style={{ background: 'unset' }}>
            <div className="frame-291-1 add-wrap">
                <img src={add} alt="add" />
            </div>
            <div className="frame">
                <div className="text_label-127 valign-text-middle notosanssc-normal-granite-gray-16px">
                    {label}
                </div>
            </div>
        </button>
    );
};


export default AddList;
