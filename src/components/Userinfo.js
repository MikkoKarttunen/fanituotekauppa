import React from 'react';
import '../App.css';

const UserInfo =({newInfo, changeHandler, submitHandler}) => {
    return(
        <form onSubmit={submitHandler}>
        Anna nimi:
        <input
            type="text"
            value={newInfo.name}
            className="info"
            onChange={e=>changeHandler(e, 'name')}>
            </input>
        Anna osoite:
        <input
            type="text"
            value={newInfo.name}
            className="info"
            onChange={e=>changeHandler(e, 'name')}>
            </input>
        </form>                                                                                                                                                                                                                                                     
    )
}