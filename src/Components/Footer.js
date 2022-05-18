import React from 'react'
import logo from '../../src/logo.svg'
import { Container } from 'react-bootstrap'
export default function Footer() {
    const width = "100px";
    const height = "100px";
    return (
        <div>

            <Container fluid className='p-0'>
                <div className="d-flex py-3 bg-dark text-light footer-info" >
                    <div className="w-25 column logo"><img className='d-flex justify-content-cente w-100' src={logo} height={height} width={width} /><p className='text-center'>A footer is a component that is used at the end of a website which normally contains a copyrights notice and a link to privacy that is used at the end of a website which normally contains a copyrights notice and a link to privacy.</p></div>
                    <div className="w-25 p-5 column"><h3>Services</h3><ul><li>Web Development</li>
                    <li>web-designing</li>
                    <li>seo</li>
                    <li>graphics</li>
                    <li>training</li></ul></div>
                    <div className="w-25 p-5 column"><h3>Services</h3><ul><li>Web Development</li>
                    <li>web-designing</li>
                    <li>seo</li>
                    <li>graphics</li>
                    <li>training</li></ul></div>
                    <div className="w-25 p-5 column"><h3>Services</h3><ul><li>Web Development</li>
                    <li>web-designing</li>
                    <li>seo</li>
                    <li>graphics</li>
                    <li>training</li></ul></div>                </div>
                <div className="Row py-3 tagline" >
                    <div className="column w-100"><p className='text-center'>copyrights | Mohit Walia</p></div>
                </div>
            </Container>
        </div>
    )
}
