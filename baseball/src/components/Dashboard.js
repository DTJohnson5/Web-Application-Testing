import React from 'react';
import '../App.css';

const Dashboard = (props) => {
    return (
        <>
            <button onClick={props.setBall}>Ball</button>
            <button onClick={props.setStrike}>Strike</button>
            <button onClick={props.setFoul}>Foul</button>
            <button onClick={props.setHit}>Hit</button>
        </>
    )

}

export default Dashboard;