import React from 'react'
import '../assets/styles/Contact.css'

const Contact = () => {
    return (
        <>
            <div class="hero-bg">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="hero-flex">
                                <div class="hero-text">
                                    <h1>Contact <span>Us</span>
                                    </h1>
                                    <p>For any inquiries, please contact us. We are committed to <br></br>protecting your privacy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-text">
                                <h1 className='text-dark'>Let's <span>Connect</span>
                                </h1>
                                <p>We'd love to hear from you! Please fill out the form below, and<br></br> our team will get back to you as soon as possible.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-box">
                                <form>
                                    <div class="mb-3">
                                        <input type="text" id="name" placeholder="Name" />
                                    </div>
                                    <div class="mb-3">
                                        <input type="email" id="email" placeholder="Email" />
                                    </div>
                                    <div class="mb-3">
                                        <input type="number" id="phone" placeholder="Phone" />
                                    </div>
                                    <div class="mb-3">
                                        <textarea id="message" rows="6" placeholder="Message"></textarea>
                                    </div>
                                    <div class="submit-btn text-end">
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
