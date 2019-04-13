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

    render(){
        return(
            <section className="doctor-container">
                
                {this.getDoctorCards()}
            </section>
        )
    }
    // </Switch>
}
