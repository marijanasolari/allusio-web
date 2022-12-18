import React from "react";

export default function ContactForm() {
    const [formData, setFormData] = React.useState(
        {
            fullName:"",
            email:"",
            subject:"",
            message:"",
            isNewsletter: true
        }

    ) 

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value,
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }

    return (
        <div id="contact">
            <h3>Contact me</h3>
            <h2>Hi there! 👋 I’d love to hear from you</h2>
            <form onSubmit={handleSubmit}>
                <div className="form--row">
                    <div className="form--element">
                        <label htmlFor="fullName">
                            Full name
                        </label>
                        <input 
                            id="fullName"
                            type="text" 
                            name="fullName" 
                            value={formData.fullName}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form--element">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form--row">
                    <div className="form--element">
                        <label htmlFor="subject">
                            Subject
                        </label>
                        <input
                            id="subject"
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form--row">
                    <div className="form--element">
                        <label htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            rows="4"
                            cols="50"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form--row">
                    <div className="form--element checkbox">
                        <input
                            id="isNewsletter"
                            type="checkbox"
                            name="isNewsletter"
                            checked={formData.isNewsletter}
                            onChange={handleChange}
                        />
                        <label htmlFor="isNewsletter">
                            Subscribe to our newsletter?
                        </label>
                    </div>
                </div>

                <div className="form--row">
                    <button>
                        Send message
                    </button>
                 </div>
            </form>
        </div>
    )
}