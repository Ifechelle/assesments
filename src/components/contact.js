import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"

function Contacts() {
    return (
        <div className='text-center text-h-100 bg-gradient-to-t from-db via-brown to-beige p-5 shadow-inner h-screen'>
            <header className=" bg-gradient-to-t from-db via-brown to-beige shadow-outer h-full">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className='text-4xl '> Need Help? Contact JHB Institute</div>
                <br />
                <br />
                <div className="text-2xl">
                    <p>
                        Phone Number: 443-333-3333
                    </p>
                </div>
                <br />
                <div className="text-2xl">
                    <p>
                        Email: oooo@gmail.com
                    </p>
                </div>
                <br />
                <div className="text-2xl">
                    <p>
                        Address: 7710 Windsor Mill Rd, Windsor Mill, Maryland
                    </p>
                </div>
            </header>
        </div>
    );
}

export default Contacts;