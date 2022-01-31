import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.item.imgUrl} alt={props.item.title} className="card--img"/>
            <div className="card--content">
                <div className="card--location">
                    <img src="../images/locationIcon.png" alt="location" className="lIcon"/>
                    <h4 className="card--locationName">{props.item.location}</h4>
                    <a href={props.item.link} className="card--locationLink">View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.item.title}</h1>
                <h4>{props.item.startDate} - {props.item.endDate}</h4>
                <p>{props.item.description}</p>
            </div>
            <hr />    
        </div>
    )
}