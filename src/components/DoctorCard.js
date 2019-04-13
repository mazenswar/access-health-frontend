import React from 'react'

const DoctorCard = props => {

    return(
        <div className="doctor-card">
            <p>Name: {props.doctor.name}</p>
            <p>Specialty: {props.doctor.speciality}</p>
            <p>Years Experience: {props.doctor.years_experience}</p>
            <p>Education: {props.doctor.education}</p>
            <img src={props.doctor.img_url}/>
        </div>
    )
}
export default DoctorCard
