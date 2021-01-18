import React from 'react';
import './Label.scss';

function Label({content, bgColorClass}) {
    return <div className={"label__elm uppercase d-flex ai-c " + bgColorClass}>{content}</div>
}

export default Label;
