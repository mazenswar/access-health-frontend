import React, {Component} from 'react'
import DoctorCard from '../components/DoctorCard'
import {Route, Switch} from 'react-router-dom'
export default class DoctorContainer extends Component {

    state = {
            doctors: []
        }


    componentDidMount(){
        fetch(`http://localhost:4000/doctors`)
        .then(res => res.json())
        .then(doctors => {
            this.setState({
                doctors: doctors
            })
        })
    }


    getDoctorCards = () => {
        return this.state.doctors.map(doctor => {
            return <DoctorCard key={doctor.id} doctor={doctor}/>
        })
    }


    showPage(renderProps){
        console.log(renderProps);
        // if(this.state.doctors.length > 0){
        //     const doctorIdUrl = renderProps.match.params.id
        //     const doctor = this.state.doctor.find(doctor){return doctor.id. === doctorIdUrl})
        //     return <RapCard doctor={doctor} />
        // } else {
        //   return null
        // }
    }


    render(){
        return(
            <section className="doctor-container">
                {this.getDoctorCards()}
            </section>
        )
    }
    // </Switch>
}
