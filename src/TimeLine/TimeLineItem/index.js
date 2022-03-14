import React from "react";
import styles from './style.css';

const TimeLineItem = (props) => {
    return (<li className={"timeline__item"}>
        <div className="direction-l">
            <span className="time-wrapper"><span className="time">{props.createdAt.split('T')[0]}</span></span>
        </div>
        <div className="direction-r">
            <div className="flag-wrapper">
                <span className="flag">
                    {props.name}
                </span>
            </div>
            <div className="desc">My current employment. Way better than the position before!</div>
        </div>
    </li>)
}

export default TimeLineItem;