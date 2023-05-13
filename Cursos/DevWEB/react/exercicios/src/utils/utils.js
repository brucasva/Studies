import React from "react"

export function childrenWithProps(props){
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, { 
            ...props, ...child.props /* Recebe as caracteristicas do pai e depois as do filho */
        })
    })
}