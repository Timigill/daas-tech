import React from 'react';

function Values() {
    return (
        <div
            className="d-flex flex-column align-items-center text-center py-5 px-3"
            style={{
                minHeight: "100vh",
            }}
        >
            <h1
                className="mt-2"
                style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "2.2rem",
                    lineHeight: 1.2,
                    color: "#ffffff",
                    maxWidth: "800px",
                    margin: "0 auto",
                }}
            >
                We live by our values
            </h1>

            <div className="container mt-5" style={{ zIndex: 1 }}>
                <div className="row g-4 justify-content-center">
                    {/* Card 1 */}
                    <div className="col-12 col-md-6 col-lg-6">
                        <div
                            className="p-4 shadow rounded text-white h-100"
                            style={{
                                border: "1px solid #222",
                                background: "linear-gradient(to top left, rgba(164, 122, 255, 0.1), rgba(0,0,0,1))",
                            }}
                        >
                            <img src="/Careers/integrity.png" alt="Integrity" />
                            <h5
                                className="mt-3"
                                style={{ fontFamily: "Inter, sans-serif", fontSize: "20px" }}
                            >
                                Integrity is everything
                            </h5>
                            <p
                                className="text-white-50"
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "1rem",
                                    maxWidth: 500,
                                }}
                            >
                                The scientific rigor of our products is paralleled by the ethical
                                and transparent nature of our people and actions. Through honesty,
                                we earn and maintain trust.
                            </p>
                        </div>
                    </div>


                    {/* Card 2 */}
                    <div className="col-12 col-md-6 col-lg-6">
                        <div
                            className="p-4 shadow rounded text-white h-100"
                            style={{
                                border: "1px solid #222",
                                background: "linear-gradient(to top right, rgba(164, 122, 255, 0.1), rgba(0,0,0,1))",

                            }}
                        >
                            <img src="/Careers/bulb.png" alt="Innovation" />
                            <h5
                                className="mt-3"
                                style={{ fontFamily: "Inter, sans-serif", fontSize: "20px" }}
                            >
                                Be bold and innovate
                            </h5>
                            <p
                                className="text-white-50"
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "1rem",
                                    maxWidth: 500,
                                }}
                            >
                                Living in such exciting times fuels our courage and creativity.
                                We're not content with just celebrating change; we're actively
                                driving the transformation of our industry.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-12 col-md-6 col-lg-6">
                        <div
                            className="p-4 shadow rounded text-white h-100"
                            style={{
                                border: "1px solid #222",
                                background: "linear-gradient(to bottom left, rgba(164, 122, 255, 0.1), rgba(0,0,0,1))",

                            }}
                        >
                            <img src="/Careers/hand.png" alt="Teamwork" />
                            <h5
                                className="mt-3"
                                style={{ fontFamily: "Inter, sans-serif", fontSize: "20px" }}
                            >
                                Achieve as a team
                            </h5>
                            <p
                                className="text-white-50"
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "1rem",
                                    maxWidth: 500,
                                }}
                            >
                                We prioritize people and their immense potential, valuing
                                everyone's opinions as we work towards shared goals. By engaging
                                deeply with each other, we aim to create even better products.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="col-12 col-md-6 col-lg-6">
                        <div
                            className="p-4 shadow rounded text-white h-100"
                            style={{
                                border: "1px solid #222",
                                background: "linear-gradient(to bottom right, rgba(164, 122, 255, 0.1), rgba(0,0,0,1))",

                            }}
                        >
                            <img src="/Careers/default.png" alt="Balance" />
                            <h5
                                className="mt-3"
                                style={{ fontFamily: "Inter, sans-serif", fontSize: "20px" }}
                            >
                                Belief in balance
                            </h5>
                            <p
                                className="text-white-50"
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "1rem",
                                    maxWidth: 500,
                                }}
                            >
                                Encouraging wellness and promoting a positive work-life balance
                                leads to healthier, happier individuals, which in turn creates
                                healthier, happier workplaces.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Values;
