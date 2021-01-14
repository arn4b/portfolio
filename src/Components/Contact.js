import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">



         </div>

         <div className="row">
            <div className="eight columns">


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Hit me up, <br />Let's Collaborate!</h4>
					   <p className="address">
						   {name}<br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span><br />
                     <p><u><a href="mailto:arnabc1701@gmail.com">arnabc1701@gmail.com</a></u></p>
					   </p>
				   </div>

               
            </aside>
      </div>
      </div>
   </section>
    );
  }
}

export default Contact;
