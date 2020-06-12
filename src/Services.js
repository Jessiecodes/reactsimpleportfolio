import React, { Component } from 'react';
import './Services.css';



class Services extends Component {
    render() {
        return(
            <div className="services">
                <h3>Services</h3>
                <h2>What I offer</h2>
                <div className="row">
                   <center><Icons myIcon={iconObj[0].icon} myTitle={iconObj[0].title} myDescription={iconObj[0].description} /></center> 
                   <center><Icons myIcon={iconObj[1].icon} myTitle={iconObj[1].title} myDescription={iconObj[1].description} /></center>
                   <center> <Icons myIcon={iconObj[2].icon} myTitle={iconObj[2].title} myDescription={iconObj[2].description} /></center>
                   <center> <Icons myIcon={iconObj[3].icon} myTitle={iconObj[3].title} myDescription={iconObj[3].description} /></center>
                </div>
            </div>

        );
    }
}

const iconObj = [
    {
        icon: <ion-icon name="phone-portrait-outline"></ion-icon>,
        title: 'Responsive',
        description: 'Looks great on any screensize.'
    },
    {
        icon: <ion-icon name="brush-outline"></ion-icon>,
        title: 'Redesign',
        description: 'Freshly redesigned for Bootstrap 4 project.'
    },
    {
        icon: <ion-icon name="thumbs-up-outline"></ion-icon>,
        title: 'Favorite',
        description: 'Millions of users React JS framework '
    },
    {
        icon: <ion-icon name="help-outline"></ion-icon>,
        title: 'Questions',
        description: 'Ask and you shall receieve. '
    }

];

class Icons extends Component {
    render() {
        return (
            <div>
                <span>
                    {this.props.myIcon}
                </span>
                <h4> {this.props.myTitle} </h4>
                <p> {this.props.myDescription} </p>
            </div>
        );
    }
}



export default Services;