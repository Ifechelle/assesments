import React from "react";
import Header from "./secure/header";

function Contacts() {
    return (
        <div className='text-center bg-gradient-to-l from-brown to-beige shadow-inner h-screen code'>
            <Header />
             <header>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className='text-4xl text-blue'> Need Help? Contact JHB IT Institute</div>
                <br />
                <br />
                <div className="text-2xl text-beige">
                    <p>
                        Phone Number: 443-333-3333
                    </p>
                </div>
                <br />
                <div className="text-2xl text-beige">
                    <p>
                        Email: oooo@gmail.com
                    </p>
                </div>
                <br />
                <div className="text-2xl text-blue">
                    <p>
                        Address: 7710 Windsor Mill Rd, Windsor Mill, Maryland
                    </p>
                </div>
            </header>
        </div>
    );
}

export default Contacts;