import React, {ReactChildren, ReactElement, ReactNode} from "react";
import Styles from './styles.module.css'
interface Props{
    children: React.ReactNode
    title: string
}

export default function Card({children, title}: Props) {
    return(
        <div className={Styles.card}>
            <div className={Styles['card-title']}><b>{title}</b></div>
            <div style={{width: "80%"}}>
                {children}
            </div>
        </div>
    )
}