import React from 'react';
import '../App.css';

const UserInfo = ({ newInfo, changeHandler, submitHandler, setShow }) => {
    return (
        <form onSubmit={e => submitHandler(e) }>
            Anna nimi:
        <input
                type="text"
                value={newInfo.name}
                className="info"
                onChange={e => changeHandler(e, 'name')}>
            </input><br></br>
            Anna lähiosoite:
        <input
                type="text"
                value={newInfo.address}
                className="info"
                onChange={e => changeHandler(e, 'address')}>
            </input><br></br>
            Anna sähköpostiosoite
            <input
                type="text"
                value={newInfo.email}
                className="info"
                onChange={e => changeHandler(e, 'email')}>
            </input><br></br>
            Anna postiosoite
            <input
                type="text"
                value={newInfo.postadress}
                className="info"
                onChange={e => changeHandler(e, 'postaddress')}>
            </input><br></br>
            Anna postitoimipaikka
            <input
                type="text"
                value={newInfo.post}
                className="info"
                onChange={e => changeHandler(e, 'post')}>
            </input><br></br>
            <button type="submit">Vahvista</button>
        </form>

    )
}

export default UserInfo;