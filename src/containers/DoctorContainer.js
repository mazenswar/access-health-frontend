import React, {Component} from 'react'
import DoctorCard from '../components/DoctorCard'
import {Route, Switch} from 'react-router-dom'
export default class DoctorContainer extends Component {

    state = {
            doctors: [],
            filteredDoctors: [],
            filterTerm: 'All',
            searchTerm: '',
            searchedDoctors: []
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
        if (this.statesearchedDoctors.length > 0) {
            return this.state.searchedDoctors.map(doctor => {
              return <DoctorCard key={doctor.id} doctor={doctor}/>
            })
        } else {
          if (this.state.filterTerm !== "All") {
            return this.state.filteredDoctors.map(doctor => {
              return <DoctorCard key={doctor.id} doctor={doctor}/>
            })
          } else {
            return this.state.doctors.map(doctor => {
              return <DoctorCard key={doctor.id} doctor={doctor}/>
            })
          }
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        const specialization = e.target.value

        this.setState({ filterTerm: specialization }, () => {
          const filteredDoctors = this.state.doctors.filter(doctor => {
            return doctor.speciality === specialization
          })

          this.setState({
            filteredDoctors: filteredDoctors
          })
        })
    }

    handleSearch = (e) => {
        e.preventDefault()

        this.setState({
          searchTerm: e.target.value
        }, () => this.onSearch())
    }

    onSearch = () => {
        let searchedDoctors = []

        if (this.state.doctors.length > 0) {
          searchedDoctors = this.state.doctors.filter(doctor => doctor.location.toLowerCase().includes(this.state.searchTerm) || doctor.name.toLowerCase().includes(this.state.searchTerm))
        }

        if (searchedDoctors.length > 0) {
          this.setState({ searchedDoctors: searchedDoctors })
        }
    }

    render(){

        return(
          <React.Fragment>
            <select value={this.state.filterTerm} onChange={this.handleChange}>
                <option value="All">All</option>
                <option value="Psychology">Psychology</option>
                <option value="Therapy">Therapy</option>
                <option value="Psychiatry">Psychiatry</option>
              </select>  
              <input placeholder="Search by location" type='text' onChange={this.handleSearch} value={this.state.searchTerm} />
            <section className="doctor-container">
              {this.getDoctorCards()}
            </section>
          </React.Fragment>
        )
    }
    // </Switch>
}
