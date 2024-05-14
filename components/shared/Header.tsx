import React from 'react'

const Header = ({title, subtitle} : {title: string, subtitle?: string}) => {
    return (
        <>
            <h2 className="h2-bold text-dark-600">
                {subtitle && <p className="p-16-regular mr-4" >
                </p>}
            </h2>
        </>
    )
}
export default Header
