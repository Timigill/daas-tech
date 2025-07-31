// 'use client';
// import React from 'react';
// import { LiaLinkedin } from "react-icons/lia";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
//   }),
// };

// const teamMembers = [
//   {
//     name: "Taimoor Gill",
//     role: "Founder & CEO",
//     image: "/About-Us/Riyan.png",
//   },
//   {
//     name: "Sarah Khan",
//     role: "Head of Web Development",
//     image: "/About-Us/Sophia.png",
//   },
//   {
//     name: "Abdullah Sajjad",
//     role: "Marketing Specialist",
//     image: "/About-Us/Riyan.png",
//   }
// ];

// function Team() {
//   return (
//     <div className="d-flex flex-column align-items-center text-center my-5 py-5 px-3">
//       {/* Header Section */}
//       <motion.span
//         variants={fadeInUp}
//         custom={0.6}
//         whileHover={{ scale: 1.1 }}
//         className="btn px-3 py-2"
//         style={{
//           background: "var(--accent)",
//           color: "#fff",
//           fontWeight: 500,
//           fontSize: '12px',
//           marginBottom: "12px",
//           width: 'fit-content'
//         }}
//       >
//         Our Team
//       </motion.span>

//       <motion.h2
//         initial="hidden"
//         whileInView="visible"
//         variants={fadeInUp}
//         custom={0.5}
//         viewport={{ once: true }}
//         style={{
//           fontFamily: "Inter, sans-serif",
//           fontWeight: 600,
//           lineHeight: 1.1,
//           color: "var(--foreground)",
//           maxWidth: 700,
//           margin: "0 auto",
//           // fontSize:"2.5rem"
//         }}
//       >
//         Meet the Minds Behind DaaS
//       </motion.h2>

//       <motion.p
//         className="mt-3"
//         initial="hidden"
//         whileInView="visible"
//         variants={fadeInUp}
//         custom={1}
//         viewport={{ once: true }}
//         style={{
//           fontFamily: "Inter, sans-serif",
//           fontSize: "1rem",
//           maxWidth: 550,
//           margin: "0 auto",
//           color: "var(--muted-text)",
//         }}
//       >
//         We bring together technology and strategy to create smarter Digital solutions.
//       </motion.p>

//       {/* Team Grid */}
//       <div className="container my-4">
//         <div className="row justify-content-center g-3">
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={member.name}
//               className="col-md-3"
//               initial="hidden"
//               whileInView="visible"
//               variants={fadeInUp}
//               custom={index + 2}
//               viewport={{ once: true }}
//             >
//               <div className="p-3 shadow rounded text-white" style={{ border: "1px solid #222" }}>
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   width={280}
//                   height={280}
//                   style={{ width: "100%", height: "auto", objectFit: "cover" }}
//                 />
//                 <div className="d-flex mt-2 justify-content-between">
//                   <h5 className="mb-0 " style={{ fontFamily: "Inter, sans-serif", fontSize: "15px",color: "var(--foreground)", }}>
//                     {member.name}
//                   </h5>
//                   <LiaLinkedin size={23}  style={{color: "var(--foreground)",}}/>
//                 </div>
//                 <p
//                   className=" text-start mt-2"
//                   style={{
//                     fontFamily: "Inter, sans-serif",
//                     fontSize: "1rem",
//                     maxWidth: 580,
//                     color: "#ccc",
//                     margin: "0 auto",
//                     color:'var(--muted-text)'
//                   }}
//                 >
//                   {member.role}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Team;
'use client';
import React from 'react';
import { LiaLinkedin } from "react-icons/lia";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
  }),
};

const teamMembers = [
  {
    name: "Taimoor Gill",
    role: "Founder & CEO",
    image: "/About-Us/Riyan.png",
  },
  {
    name: "Sarah Khan",
    role: "Head of Web Development",
    image: "/About-Us/Sophia.png",
  },
  {
    name: "Abdullah Sajjad",
    role: "Marketing Specialist",
    image: "/About-Us/Riyan.png",
  }
];

function Team() {
  return (
    <div className="d-flex flex-column align-items-center text-center my-5 py-5 px-3">
      {/* Header Section */}
      <motion.span
        variants={fadeInUp}
        custom={0.6}
        whileHover={{ scale: 1.1 }}
        className="btn px-3 py-2"
        style={{
          background: "var(--accent)",
          color: "#fff",
          fontWeight: 500,
          fontSize: '12px',
          marginBottom: "12px",
          width: 'fit-content'
        }}
      >
        Our Team
      </motion.span>

      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        custom={0.5}
        viewport={{ once: true }}
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          lineHeight: 1.2,
          color: "var(--foreground)",
          maxWidth: 700,
          margin: "0 auto",
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
        }}
      >
        Meet the Minds Behind DaaS
      </motion.h2>

      <motion.p
        className="mt-3"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        custom={1}
        viewport={{ once: true }}
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
          maxWidth: 550,
          margin: "0 auto",
          color: "var(--muted-text)",
        }}
      >
        We bring together technology and strategy to create smarter Digital solutions.
      </motion.p>

      {/* Team Grid */}
      {/* === Mobile Carousel === */}
      <div className="team-scroll-container">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            className="team-card"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            custom={index + 2}
            viewport={{ once: true }}
          >
            <div className="p-3 shadow rounded bg-transparent d-flex flex-column h-100" style={{ border: "1px solid var(--border-color)", minWidth: "250px" }}>
              <Image
                src={member.image}
                alt={member.name}
                width={250}
                height={250}
                className="img-fluid rounded"
                style={{ width: "100%", objectFit: "cover" }}
              />
              <div className="d-flex mt-3 justify-content-between align-items-center">
                <h5 className="mb-0" style={{ fontSize: "1rem", color: "var(--foreground)" }}>{member.name}</h5>
                <LiaLinkedin size={23} style={{ color: "var(--foreground)" }} />
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--muted-text)", marginTop: "0.5rem" }}>{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* === Desktop Grid === */}
      <div className="container">
        <div className="row justify-content-center"
          
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="col-md-3 col-sm-6 mb-4"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              custom={index + 2}
              viewport={{ once: true }}
              style={{
                // border: "1px solid var(--border-color)",
                width: "25%",         // or "300px", "20rem", etc.
                height: "450px"         // fixed height
              }}
            >
              <div
                className="p-3 shadow rounded bg-transparent d-flex flex-column h-100"
                style={{ border: "1px solid var(--border-color)" }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={350}
                  className="img-fluid rounded"
                  style={{ width: "100%", objectFit: "cover" }}
                />
                <div className="d-flex mt-3 justify-content-between align-items-center">
                  <h5
                    className="mb-0"
                    style={{ fontSize: "1rem", color: "var(--foreground)" }}
                  >
                    {member.name}
                  </h5>
                  <LiaLinkedin size={23} style={{ color: "var(--foreground)" }} />
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--muted-text)",
                    marginTop: "0.5rem",
                  }}
                >
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


    </div>
  );
}

export default Team;
