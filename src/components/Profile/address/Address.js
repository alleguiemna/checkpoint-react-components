import React from 'react'
import "./Address.css"
const Address = () => {
    // this.address=address;
    const address="7 novembre sfax";
    return (
        <div>
            <div className="address"> 
                <span >my address is : {address}</span>
            </div>
        </div>
    )
}

export default Address;