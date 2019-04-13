import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
const DoctorCard = props => {

    return(
        <Link to={`/${props.doctor.id}`} >
        <div className="doctor-card">
            <img src={props.doctor.img_url}/>
            <h3>Name: {props.doctor.name}</h3>
            <p>Specialty: {props.doctor.speciality}</p>
            <p>Years Experience: {props.doctor.years_experience}</p>
            <p>Education: {props.doctor.education}</p>
        </div>
        </Link>
    )
}
export default DoctorCard
