import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navbartop from './navbar'

export default function mainpage() {
    return (
        <div>
            <Navbartop />
            <section>
                <div className="home-page">
                    <h1 className="title">Quiz Game App</h1>
                    <p className="content">This quiz is based on Reactjs & Javascript
                    <br />There are 16 questions here and each contain 1marks</p>
                          <Link  to="/quiz"><Button className="start-btn"> Start Quiz!</Button></Link>
                 </div>
            </section>
        </div>
    )
}
