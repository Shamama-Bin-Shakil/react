import React from 'react';
import Navbar from "./Navbar";

const Contact = () => {
	return (
		<>
	      <Navbar />
	      <section className="contact-section">
	      	<main className="contact-main">
	      		<h1>Contact Form</h1>
	      		<div className="form-control">
		      		<label htmlFor="">Name:</label>
		      		<input type="text" />
	      		</div>
	      		<div className="form-control">
		      		<label htmlFor="">Email:</label>
		      		<input type="text" />
	      		</div>
	      		<div className="form-control">
		      		<label htmlFor="message">Message:</label>
		      		<textarea id="message" name="w3review" rows="4" cols="50" />
	      		</div>
	      		<div className="form-control">
	      		<button type="button" className="submit-btn">Submit</button>
	      		</div>
	      	</main>	
	      </section>

		</>
		)
}
export default Contact;