import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
const services = [
    ["Website Development", "Artificial Intelligence", "IOS App Development"],
    ["Android App Development", "Hybrid Mobile App", "Flutter App Development"],
    ["Website Design", "UI/UX Design", "Video Ad", "Digital Marketing"],
    ["Social Media Marketing", "Search Engine Optimization(SEO)", "POS System"],
    ["Software Development", "Ecommerce Website", "CRM Development", "ERP Solution"],
    ["Consultation"],
];

export default function page() {
    return (
        <div className="mt-5">
            <div className='container'>
                <div className='row'>
                    <div className='col-8'>
                        <h1
                            className="text-start text-white-50 py-2"
                            style={{
                                fontFamily: "Inter, sans-serif",
                                fontWeight: 500,
                                fontSize: "1rem",
                                lineHeight: 1.1,
                                borderBottom: "1px solid #222",
                            }}
                        >
                            Get a Quote
                        </h1>

                        <div className='p-3 mt-3'>
                            <h1
                                className="text-start"
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 500,
                                    fontSize: "1.5rem",
                                    lineHeight: 1.1,
                                    color: "#ffffff",
                                }}
                            >
                                Project Details
                            </h1>

                            <h1
                                className="text-start text-white-50 mt-4"
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 500,
                                    fontSize: "1.2rem",
                                    lineHeight: 1.1,
                                }}
                            >
                                Project Details *
                            </h1>

                            <input type="text"
                                placeholder='Enter name of the Project'
                                className='mt-2 w-100 py-1 px-2'
                                style={{
                                    border: "1px solid #222 ",
                                    background: " #000 ",
                                }}
                            />

                            <p
                                className="text-start text-white-50 mt-3"
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 500,
                                    fontSize: "1rem",
                                    lineHeight: 1.1,
                                }}
                            >
                                Please enter name of the project
                            </p>

                            <h1
                                className="text-start text-white-50 mt-5"
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 500,
                                    fontSize: "1.2rem",
                                    lineHeight: 1.1,
                                }}
                            >
                                Are you a new or existing customer? *
                            </h1>

                            <select
                                className="mt-2 w-100 py-2 px-2 text-white-50 "
                                style={{
                                    border: "1px solid #222",
                                    borderRadius: "4px",
                                    fontFamily: "Inter, sans-serif",
                                    backgroundColor: "#000",

                                }}
                            >
                                <option value="" disabled selected>
                                    -- Are you a new or existing customer? --
                                </option>
                                <option value="new">I am a new customer</option>
                                <option value="existing">I am a existing customer</option>
                            </select>

                            <p
                                className="text-start text-white-50 mt-5"
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 500,
                                    fontSize: "1rem",
                                    lineHeight: 1.1,
                                }}
                            >
                                Project Category
                            </p>

                            <>
                                {services.map((group, idx) => (
                                    <ol
                                        key={idx}
                                        className={`d-flex gap-3 ${idx !== 0 ? "mt-3" : ""}`}
                                        style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}
                                    >
                                        {group.map((item, i) => (
                                            <li key={i} className="d-flex align-items-center gap-1">
                                                <input type="checkbox" id={`item-${idx}-${i}`} />
                                                <label htmlFor={`item-${idx}-${i}`} className="text-white-50" style={{ cursor: "pointer" }}>
                                                    {item}
                                                </label>
                                            </li>
                                        ))}
                                    </ol>
                                ))}
                            </>

                            <h1
                                className="text-start text-white-50 mt-5"
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 500,
                                    fontSize: "1.2rem",
                                    lineHeight: 1.1,
                                }}
                            >
                                Project Timeline *
                            </h1>

                            <select
                                className="mt-2 w-100 py-2 px-2 text-white-50 "
                                style={{
                                    border: "1px solid #222",
                                    borderRadius: "4px",
                                    fontFamily: "Inter, sans-serif",
                                    backgroundColor: "#000",

                                }}
                            >
                                <option value="" disabled selected>
                                    Select Timeline
                                </option>
                                <option value="Week">Less than 1 Week</option>
                                <option value="Month">1 Month</option>
                                <option value="Month">1-3 Months</option>
                                <option value="Month">3-6 Months</option>
                                <option value="Month">More than 6 Month</option>
                                <option value="Not Sure">Not Sure</option>
                            </select>

                            <h1
                                className="text-start text-white-50 mt-5"
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 500,
                                    fontSize: "1.2rem",
                                    lineHeight: 1.1,
                                }}
                            >
                                Select your budget *
                            </h1>

                            <select
                                className="mt-2 w-100 py-2 px-2 text-white-50 "
                                style={{
                                    border: "1px solid #222",
                                    borderRadius: "4px",
                                    fontFamily: "Inter, sans-serif",
                                    backgroundColor: "#000",

                                }}
                            >
                                <option value="" disabled selected>
                                    Select budget in USD
                                </option>
                                <option value="5-10">500-1000$</option>
                                <option value="10-20">1000-2000$</option>
                                <option value="20-50">2000-5000$</option>
                                <option value="50-100">5000-10,000$</option>
                                <option value="100-200">10,000-20,000$</option>
                                <option value="200-500">20,000-50,000$</option>
                                <option value="500-1000">50,000-100,000$</option>
                                <option value="1000+">100,000$+</option>
                            </select>

                        </div>

                    </div>
                    <div
                        className="col-4 p-4"
                        style={{
                            backgroundColor: "#000",
                            borderRadius: "8px",
                            boxShadow: "0 0 20px rgba(255, 255, 255, 0.05)",
                        }}
                    >
                        <h1
                            className="text-start text-white-50 py-2"
                            style={{
                                fontFamily: "Inter, sans-serif",
                                fontWeight: 500,
                                fontSize: "1rem",
                                lineHeight: 1.1,
                                borderBottom: "1px solid #222",
                            }}
                        >
                            Get in Touch
                        </h1>

                        <p
                            className="mt-4 text-white-50"
                            style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "0.8rem",
                                lineHeight: "1.5",
                            }}
                        >
                            Renowned mobile app and web development company delivering user-engaging mobile applications and responsive websites for multiple industry verticals.
                        </p>

                        <ol
                            className="mt-4 text-white-50"
                            style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}
                        >
                            <li
                                className="d-flex align-items-center gap-2"
                                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}
                            >
                                <HiOutlineMail size={18} />
                                <span><strong>Email:</strong> founder@daastech.info</span>
                            </li>

                            <li
                                className="mt-3 d-flex align-items-center gap-2"
                                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}
                            >
                                <FaPhone size={18} />
                                <span><strong>Phone:</strong> +923188672096</span>
                            </li>

                            <li
                                className="mt-3 d-flex align-items-center gap-2"
                                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}
                            >
                                <MdPhoneIphone size={18} />
                                <span><strong>Mobile:</strong> +923016860925</span>
                            </li>

                            <li
                                className="mt-3 d-flex align-items-center gap-2"
                                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}
                            >
                                <TbWorld size={18} />
                                <span><strong>Int. Contact#:</strong> +1-(267)489-6694</span>
                            </li>
                        </ol>

                        <h1
                            className="text-start text-white-50 py-2 mt-4"
                            style={{
                                fontFamily: "Inter, sans-serif",
                                fontWeight: 500,
                                fontSize: "1rem",
                                lineHeight: 1.1,
                                borderBottom: "1px solid #222",
                            }}
                        >
                            Working Hours
                        </h1>

                        <p
                            className="mt-4 text-white-50"
                            style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "0.8rem",
                                lineHeight: "1.5",
                            }}
                        >
                            Monday - Friday: 09:00 AM – 06:00 PM
                        </p>

                        <p
                            className="mt-2 text-white-50"
                            style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "0.8rem",
                                lineHeight: "1.5",
                            }}
                        >
                            Saturday - Sunday: Closed
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

