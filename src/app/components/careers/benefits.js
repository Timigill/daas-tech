import React from 'react';

function Benefits() {
  const benefitsList = [
    { icon: "/careers/leaf.png", title: "Family/Parental Leave" },
    { icon: "/careers/vacation.png", title: "Generous Vacation" },
    { icon: "/careers/home.png", title: "Remote Work" },
    { icon: "/careers/healthcare.png", title: "Medical, Life Insurance" },
    { icon: "/careers/mobile.png", title: "Technology Allowance" },
    { icon: "/careers/timer.png", title: "Flexible Work Schedule" },
    { icon: "/careers/money.png", title: "Retirement Plan" },
    { icon: "/careers/build.png", title: "Company Equity" },
  ];

  return (
    <div className="d-flex flex-column align-items-center text-center py-5 px-3">
      {/* Heading */}
      <h1
        className="mt-1"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "2.5rem",
          lineHeight: 1.1,
          color: "#ffffff",
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        Perks and benefits
      </h1>

      {/* Subheading */}
      <p
        className="mt-3 text-white-50"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "1rem",
          maxWidth: 680,
          margin: "0 auto",
        }}
      >
        SkillMatch is dedicated to promoting the happiness and well-being of our
        employees. We take pride in offering a generous bundle of benefits
        designed to support our team members both inside and outside of the
        office.
      </p>

      {/* Benefits Grid */}
      <div className="container mt-5">
        <div className="row g-3 justify-content-center">
          {benefitsList.map((item, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  style={{ maxWidth: "70px", marginBottom: "10px" }}
                />
                <h5
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    lineHeight: 1.3,
                    color: "#ffffff",
                    maxWidth: 160,
                  }}
                >
                  {item.title}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Benefits;
