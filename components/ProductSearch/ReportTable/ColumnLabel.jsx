import React from 'react';
export default function ColumnLabel(props) {
    if (props['label-cn']) {
        return (
            <label>
                {props['label-cn']}<br/>
                <span className="smaller">{props['label'] || props['accessor']}</span>
            </label>
        )
    }
    return (
        <label>
            {props['label'] || props['accessor']}
        </label>
    )
}