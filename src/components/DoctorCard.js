import React from 'react'

const DoctorCard = props => {

    return(

        <a href="">
          <div className="doctor-card">
            <img src={props.doctor.img_url}/>
            <h3>Name: {props.doctor.name}</h3>
            <p>Specialty: {props.doctor.speciality}</p>
            <p>Years Experience: {props.doctor.years_experience}</p>
            <p>Education: {props.doctor.education}</p>
          </div>
        </a>

    )
}
export default DoctorCard
