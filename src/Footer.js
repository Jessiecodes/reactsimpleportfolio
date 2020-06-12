import React from 'react';
import './Footer.css';


class Footer extends React.Component {
    render() {
        return(
            <div>
               
                <footer>
                  
                        <h5 class="text-uppercase"> 
                         Footer Content</h5>
                         <span><ion-icon name="star-outline"></ion-icon>
                         </span>
                        <p>Here you can use rows and columns to organize your footer content.</p>

                         

                        <ul class="list-unstyled">
                        <li>
                            <a href="#!">Link 1</a>
                        </li>
                        <li>
                            <a href="#!">Link 2</a>
                        </li>
                        <li>
                            <a href="#!">Link 3</a>
                        </li>
                        <li>
                            <a href="#!">Link 4</a>
                        </li>
                        </ul>

             


                </footer>
                        


             </div>
        );
    }
}



export default Footer;