import React from "react";
import { ReactComponent as BuildingLocation } from "../../assets/building_location.svg";
import { ReactComponent as Phone } from "../../assets/phone.svg";
import { ReactComponent as Email } from "../../assets/email.svg";
import { HashLink } from "react-router-hash-link";
import { RiChat1Line } from "react-icons/ri";

function Footer() {

	const heading = {
			fontFamily:"Catamaran",
			fontWeight: 700,
			fontSize: 24,
			fontStyle: "normal"
	}

	const normal = {
		fontFamily:"Lato",
			fontWeight: 400,
			fontSize: 16,
			fontStyle: "normal"
	}

		return (
			<div className="footer pagePadding " id="contact">
			  <ul className="top-section flex items-center  ">
				<li className="about w-full lg:w-1/3 place-contents-cente r">
				  <div className="ulHeadings">
					<h3 style = {heading}>About</h3>
				  </div>
				  <ul className="flex flex-col space-y-4">
					<li className="address flex flex-row">
					  <BuildingLocation />
					  <p style={{
                    fontFamily:"Lato",
                    fontWeight: 600,
                    fontSize: 16,
                    fontStyle: "normal"
                    }}>12E Alpine Suites, Ernakulam, Kerala 683511 India</p>
					</li>
					<li className="address flex flex-row ">
					  <Phone />
					  <p style={{
                    fontFamily:"Lato",
                    fontWeight: 900,
                    fontSize: 22,
                    fontStyle: "normal"
                    }}>+91 920 704 1999</p>
					</li>
					<li className="address flex flex-row ">
					  <Email />
					  <p style={{
                    fontFamily:"Lato",
                    fontWeight: 500,
                    fontSize: 16,
                    fontStyle: "normal"
                    }}>info@clintspace.com</p>
					</li>
					<li className="address flex flex-row ">
					  <div className="inputGroup w-full">
						<input type="text" placeholder="Email or Phone" />
						<button
						  className="btn-chat"
						  style={{ width: "fit-content", fontSize: "25px" }}
						>
						  {" "}
						  <RiChat1Line />{" "}
						</button>
					  </div>
					</li>
				  </ul>
				</li>
				<li className="information w-full lg:w-1/3">
				  <div className="ulHeadings">
					<h3 style = {heading}>Information</h3>
				  </div>
				  <ul>
					<li style={normal}>Home</li>
					<li style={normal}>Our story</li>
					<li style={normal}>Services</li>
					<li style={normal}>Portfolio</li>
					<li style={normal}>Team</li>
					<li style={normal}>Contact</li>
				  </ul>
				</li>
		
				<li className="information w-full lg:w-1/3">
				  <div className="ulHeadings">
					<h3 style = {heading}>Services</h3>
				  </div>
				  <ul>
					<li style={normal}>Web development</li>
					<li style={normal}>Brand Development</li>
					<li style={normal}>Digital Marketing</li>
					<li style={normal}>UI/UX & Mobile Apps</li>
					<li style={normal}>Content Writing</li>
					<li style={normal}>Promotional Videos</li>
				  </ul>
				</li>
				<li className="information w-full lg:w-1/3">
				  <div className="ulHeadings">
					<h3 style = {heading}>Social Links</h3>
				  </div>
				  <ul>
					<li style={normal}><HashLink to="">Instagram</HashLink></li>
					<li style={normal}><HashLink to="">Facebook</HashLink></li>
					<li style={normal}><HashLink to="">Twitter</HashLink></li>
					<li style={normal}><HashLink to="">LinkedIn</HashLink></li>
				  </ul>
				</li>
			  </ul>
			  <div className="bottom-section"> 
			  <h4 style={{
                    fontFamily:"Lato",
                    fontWeight: 400,
                    fontSize: 18,
                    fontStyle: "normal"
                    }}>Copyright &#169; 2022 ClintSpace.All rights reserved.</h4>
			  <a className="footer-jump-button" href="#Home"> <img src={require("../../assets/jump.png")} alt="go up"></img></a>
			 
			  </div>
			</div>
		  );
}

export default Footer;
