import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
const DoctorCard = props => {

    return(
        <Link to={`/${props.doctor.id}`} >
        <div className="doctor-card">
            <img src={props.doctor.img_url}/>
            <p>Name: {props.doctor.name}</p>
            <p>Specialty: {props.doctor.speciality}</p>
            <p>Years Experience: {props.doctor.years_experience}</p>
            <p>Education: {props.doctor.education}</p>
            <p>Location: {props.doctor.location}, NYC</p>
        </div>
        </Link>
    )
}
export default DoctorCard
