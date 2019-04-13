import React, {Component} from 'react'


export default class Show extends Component {
    state = {
        doctor: ''
    }

    componentDidMount(){
        let urlParam = this.props.match.params.id
        fetch(`http://localhost:4000/doctors/${urlParam}`)
        .then(res => res.json())
        .then(doctor => {
            this.setState({
                doctor: doctor
            },()=> console.log(this.state))
        })
}

    pTagz = () => {
        return this.state.doctor.languages
    }


    render(){
        console.log(this.state.doctor);
            return(
                <div>
                    <h1>{this.state.doctor.name}</h1>
                    <img src={this.state.doctor.img_url}/>
                    <p>Specialty: {this.state.doctor.speciality}</p>
                    <p>Location: {this.state.doctor.location}</p>
                    <p>Years Experience: {this.state.doctor.years_experience}</p>
                    <p>Education: {this.state.doctor.education}</p>
                    <p>Gender: {this.state.doctor.gender}</p>
                    <p>Languages: {this.pTagz()}</p>
                </div>
            )
        }

        // <p>Languages: {this.pTagz(this.state.doctor.languages)}</p>
    }
