import React from 'react'
import CallLogo from './assets/phone-alt-solid.svg'
import MailLogo from './assets/envelope-regular.svg'

export default function ContactCard() {
    var profileImage = {
        backgroundImage: 'url(https://static.dw.com/image/54959312_101.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <div className="card-container shadow-lg m-auto w-48 h-52 bg-gray-50 rounded-lg flex flex-col justify-between items-center relative">
            <div className="profileImage absolute -top-8 w-20 h-20 rounded-full border-2 border-red-600" style={profileImage}>
                <div className="bg-green-500 w-4 h-4 rounded-full absolute bottom-1 right-0"></div>
            </div>
            <div className="card-text text-center mt-12 flex flex-col">
                <h2 className="contact-name text-2xl font-bold p-2 text-gray-700">
                    Jimmy Hendrix
                </h2>
                <h1 className="contact-email font-light text-gray-500 text-xs py-2">
                    jimihendrix@abc.com
                </h1>
                <h1 className="contact-mobile font-light text-gray-500 text-xs py-2">
                    9998899889
                </h1>
            </div>

            <div className="card-footer flex flex-row">
                <img className="w-8 h-8 px-2" alt="call" src={CallLogo}></img>
                <img className="w-8 h-8 px-2" alt="mail" src={MailLogo}></img>
            </div>
            <div className="card-border w-full h-1 bg-red-600 rounded-b-lg"></div>
        </div>
    )
}
