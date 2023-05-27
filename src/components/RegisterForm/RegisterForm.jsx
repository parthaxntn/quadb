import React, { useState } from 'react'
import './RegisterForm.scss'

const RegisterForm = ({ movie }) => {
    const [contact, setContact] = useState('')
    const [name, setName] = useState('')
    const [tickets, setTickets] = useState('')
    const [preference, setPreference] = useState('')
    
    const handleSubmit = () => {
        localStorage.setItem(contact, JSON.stringify({ name: name, tickets: tickets, preference: preference, contact: contact }));
        alert('Your ticket has been booked successfully!')
    }

    return (
        <div>
            <div className="form_outline d-flex">
                <main class="form-signin w-50 m-auto">
                    <form>
                        <h1 class="h3 mb-3 fw-normal">{movie.name}</h1>

                        <div class="mt-5 form-floating">
                            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} class="form-control" id="floatingInput" placeholder="Name" required />
                            <label for="floatingInput">Name</label>
                        </div>
                        <div class="form-floating mt-3">
                            <input type="number" class="form-control" id="floatingPassword" value={contact} onChange={(e)=>{setContact(e.target.value)}} placeholder="Contact no." required />
                            <label for="floatingPassword">Contact</label>
                        </div>
                        <div class="mt-3 form-floating">
                            <input type="number" class="form-control" id="floatingInput" value={tickets} onChange={(e)=>{setTickets(e.target.value)}} placeholder="Number of Tickets" />
                            <label for="floatingInput">No. of Tickets</label>
                        </div>
                        <div class="form-floating mt-3">
                            <input type="text" class="form-control" id="floatingPassword" placeholder="Ticket preference" onChange={(e)=>{setPreference(e.target.value)}} />
                            <label for="floatingPassword">Ticket preference</label>
                        </div>

                        <button class="w-50 my-3 btn btn-lg btn-primary" onClick={()=>{handleSubmit()}} type="submit">Book</button>
                    </form>
                </main>
                <img src={movie.image.medium} alt="" className="image" />
            </div>
        </div>
    )
}

export default RegisterForm
