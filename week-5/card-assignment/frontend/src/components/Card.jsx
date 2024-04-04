import React from "react"
import "./Card.css"

export function Card({ info }) {
    return <div className="card">
        <div className="content">
            <h1>{info.personName}</h1>
            <p>{info.description}</p>
            <h2>Interest</h2>
            {
                info.interests.map((interest) => {
                    return <p>
                        {interest}
                    </p>
                })
            }
            <button>Linkedin</button>
            <button>Twitter</button>
            <button>Instagram</button>
        </div>

    </div>
}