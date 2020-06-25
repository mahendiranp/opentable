import React from 'react';
import styles from './List.module.css';
import { Link } from "react-router-dom";

const List = (props) => {
    return(
        <li className={styles.container}>
            <div className={styles.content}>{props.data.name}</div>
            <div className={styles.content}>{props.data.area}</div>
            <div className={styles.content}>{props.data.address}</div>
        </li>
    )
}

export default List