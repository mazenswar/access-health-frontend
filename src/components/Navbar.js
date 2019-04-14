import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo"><img src="https://lh3.googleusercontent.com/HGPih_jjUPyDmdX0auH_4XzjD9y8f2efFjcz64lIdKCjPCBvs4EGHC_HW_srSh8Q9Bq7iaInPFSRHw_cP-_dZ8tZEOb7BJCu2_n2veIbbUTKCVItY2BNISGXlCIUQNIoOy1QQZhPxk4ZxaOOTL_AmJaGrW1FkA9Z1VFgvNrzLyAE6pD1cnx4jOjrnPHLS8sSt0oUnf7OU3txPJGL-cvG1vWD-oP5b2d_6pnGjUO4pZFTn9HLgVDGvz5cSIGX-cgUACFXS-_Tx6Rfj4OeWmGCW7upFnFHqpNUq5DqHIQrRDrym5N1kfi7gB-MSTwwbx_UBeCStRSZcmyYH6xEpgGgF5PwAxjwhGqpLXbLpPWuM9Q0q92qJHwf-cb5-BDQn_PA3o0kjsfMqOincEtPtkglSxmGF8Bcx8KlrjZ7KjqXfsTinzEEFs7tOD92-JQBNDDQUODhQm7e-qh9JX5EzefV-M3MTbO8YKP5HKXc7U4V_cipwBBfAff0worXd2XhdIApcfV81I5SFUQ57tKAmAIGZf3tYjOEBu5tSq0nm2FMFpZHDGxmIdkeA4tJSszoBza_0mb_f5bbykRhE-TaRjcZ0P2uHYtxC6cpLdZUPTKtoe_hv6uBeH_-RwbBuP71sBos-W4JxsrCPglqNtDPhvVkqzyvJzQEZwcZ=w527-h121-no" className="logo-image"/></div>
        <div className="navLink"><Link to="">Home</Link></div>
        { props.user.username || props.user['user'] ? <div className="navLink"><Link to="/doctors">Doctors</Link></div> : null }
        { props.user.username || props.user['user'] ? <div className="profilePhoto"><Link to="/profile"><img src="https://ya-webdesign.com/images/blank-profile-picture-png-8.png" className="photo"/></Link></div> : null }

        { props.user.username || props.user['user'] ? <div className="navLink"><Link onClick={props.handleLogout}>Logout</Link></div> : null }
      </div>
    </nav>
  )
}

export default Navbar
