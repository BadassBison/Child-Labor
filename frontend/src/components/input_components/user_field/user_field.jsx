import React from 'react'

const UserField = ({ value, onChange, placeholder, addClass }) => {
    return (
        <div className="field">
            <div className="control has-icons-left">
                <input type="text" className={`input ${addClass}`} value={value} onChange={onChange} placeholder={placeholder}/>
                <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                </span>
            </div>
        </div>
    )
}

export default UserField