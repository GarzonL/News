import React, { Component } from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import './styles/Contact.css';

export default class Contact extends Component{
    render(){
        return(
            <div className="container_contact">
                <CardColumns>
                    <Card style={{ margin:'80px 0px 40px 200px' }}>
                        <Card.Body>
                        <Card.Title>Contacto News & News</Card.Title>
                        <Card.Text>
                            <br/>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt cum placeat consequuntur reiciendis quos veritatis voluptatum itaque corporis, sequi quam dolor doloremque. Quod ipsa ab corporis praesentium at, tempora eum.</p><br/>
                           
                            <br/>
                        
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    
                    
                </CardColumns>
                
                
            </div>
        )
    }
}