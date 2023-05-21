import './Header.css'
import React from 'react'

export default props => 
    <header className="header d-none d-sm-flex flex-column"> {/* Para celulares o header não aparece d-none d-sm-flex: se for sm usa o display flex */}
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className='lead text-muted'>{props.subtitle}</p>
    </header>
