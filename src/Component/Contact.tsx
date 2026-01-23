

// import React, { useState } from "react";
// import { MapPin, Mail, Phone, Send } from "lucide-react";
// import emailjs from "emailjs-com";

// /* ---------------- INFO CARD COMPONENT ---------------- */
// const InfoCard: React.FC<{
//   icon: React.ReactNode;
//   title: string;
//   subtitle: string;
//   value: string;
//   action: string;
// }> = ({ icon, title, subtitle, value, action }) => (
//   <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
//     <div className="flex items-center mb-4 text-blue-600">{icon}</div>
//     <h4 className="font-bold text-lg mb-1">{title}</h4>
//     <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
//     <p className="text-gray-700 mb-2">{value}</p>
//     <button className="text-blue-600 font-medium flex items-center gap-1 hover:underline">
//       {action} <Send className="w-4 h-4" />
//     </button>
//   </div>
// );

// /* ---------------- MANAGER CARD COMPONENT ---------------- */
// const ManagerCard: React.FC<{
//   name: string;
//   role: string;
//   phone: string;
//   email: string;
//   img: string;
// }> = ({ name, role, phone, email, img }) => (
//   <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow">
//     <img className="w-16 h-16 rounded-full" src={img} alt={name} />
//     <div>
//       <h4 className="font-bold">{name}</h4>
//       <p className="text-sm text-gray-500">{role}</p>
//       <p className="text-sm">{phone}</p>
//       <p className="text-sm">{email}</p>
//     </div>
//   </div>
// );

// /* ---------------- MAIN COMPONENT ---------------- */
// const Contact: React.FC = () => {

  
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     const templateParams = { from_name: name, email, phone, subject,  message };

//     emailjs
//       .send(
//         "service_ydc3erg", // replace with your EmailJS service ID
//         "template_wicg04p", // replace with your EmailJS template ID
//         templateParams,
//         "y5gunvblEinQd0bkV" // replace with your EmailJS public key
//       )
//       .then(
//         () => {
//           alert("Message sent successfully!");
//           setName(""); setEmail(""); setPhone(""); setMessage("");
//           setLoading(false);
//         },
//         () => {
//           alert("Failed to send message, please try again.");
//           setLoading(false);
//         }  
//       ),[]};

//   return (
//     <div className="relative min-h-screen bg-slate-50 font-sans text-slate-900 mt-6">

//       <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />
//       <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-[10%] left-[-5%] w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />


//       <div className="relative pt-24 pb-16 px-4 text-center">
//         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
//           <span className="relative flex h-2 w-2">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
//           </span>
//           Get in touch
//         </div>

//         <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
//           We’d love to{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
//             hear from you
//           </span>
//         </h1>

//         <p className="max-w-2xl mx-auto text-lg text-slate-600">
//           Whether you have a question about our services, pricing, or just want to say hello, our team is ready to help.
//         </p>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 pb-24 sm:px-6 lg:px-8">


//         <div className="grid md:grid-cols-3 gap-6 mb-20">
//           <InfoCard
//             icon={<MapPin className="w-6 h-6" />}
//             title="Visit our Office"
//             subtitle="Headquarters"
//             value="H-45/B, Abul Fazal Enclave-1, Jamia Nagar, New Delhi 110025, India"
//             action="View on Map"
//           />
//           <InfoCard
//             icon={<Mail className="w-6 h-6" />}
//             title="Email Us"
//             subtitle="Support Team"
//             value="Shail.moonlight@gmail.com"
//             action="Send Email"
//           />
//           <InfoCard
//             icon={<Phone className="w-6 h-6" />}
//             title="Call Us"
//             subtitle="Mon-Fri from 8am to 5pm"
//             value="+91 8587860420"
//             action="Call Now"
//           />
//         </div>


//         {/* <div className="mb-20">
//           <h2 className="text-2xl font-bold mb-8">Meet our Team</h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             <ManagerCard
//               name="Amaan"
//               role="Manager"
//               phone="+91 85878604203"
//               email="Shail.moonlight@gmail.com"
//               img="https://randomuser.me/api/portraits/men/32.jpg"
//             />
//             <ManagerCard
//               name="Arsh"
//               role="Sales Manager"
//               phone="+20 23797 1913"
//               email="Arsharsh886@gmail.com"
//               img="https://randomuser.me/api/portraits/men/45.jpg"
//             />
//           </div>
//         </div> */}


//         <div className="grid lg:grid-cols-12 gap-8 bg-white rounded-3xl shadow-xl border overflow-hidden">

//           <div className="lg:col-span-5 p-8">
//             <h3 className="text-2xl font-bold mb-4">Send us a message</h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full border border-gray-300 rounded-md p-2"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full border border-gray-300 rounded-md p-2"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <input
//                 type="tel"
//                 placeholder="Your Phone"
//                 className="w-full border border-gray-300 rounded-md p-2"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//               <input
//                 type="text"
//                 placeholder="Subject"
//                 className="w-full border border-gray-300 rounded-md p-2"
//                 value={subject}
//                 onChange={(e) => setSubject(e.target.value)}
//                 required
//               />

//               <textarea
//                 placeholder="Your Message"
//                 rows={5}
//                 className="w-full border border-gray-300 rounded-md p-2"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 required
//               ></textarea>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//               >
//                 {loading ? "Sending..." : "Send Message"}
//                 <Send className="w-4 h-4" />
//               </button>
//             </form>
//           </div>

//           <div className="lg:col-span-7 relative min-h-[400px]">
//             <iframe
//               title="map"
//               src="https://www.google.com/maps?q=Abul+Fazal+Enclave-1,+Jamia+Nagar,+New+Delhi&output=embed"
//               className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition"
//               allowFullScreen
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;





// import  { useState } from "react";
// import { MapPin, Mail, Phone, Send } from "lucide-react";
// import emailjs from "emailjs-com";

// /* ---------------- INFO CARD COMPONENT ---------------- */
// const InfoCard: React.FC<{
//   icon: React.ReactNode;
//   title: string;
//   subtitle: string;
//   value: string;
//   action: string;
// }> = ({ icon, title, subtitle, value, action }) => (
//   <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
//     <div className="flex items-center mb-4 text-blue-600">{icon}</div>
//     <h4 className="font-bold text-lg mb-1">{title}</h4>
//     <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
//     <p className="text-gray-700 mb-2">{value}</p>
//     <button className="text-blue-600 font-medium flex items-center gap-1 hover:underline">
//       {action} <Send className="w-4 h-4" />
//     </button>
//   </div>
// );

// /* ---------------- MAIN CONTACT COMPONENT ---------------- */
// const Contact: React.FC = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");

//   const [loading, setLoading] = useState(false);
//   const [successMsg, setSuccessMsg] = useState("");
//   const [errorMsg, setErrorMsg] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     const templateParams = {
//       from_name: name,
//       email,
//       phone,
//       subject,
//       message,
//     };

//     emailjs
//       .send(
//         "service_ydc3erg",     // ✅ your service ID
//         "template_wicg04p",    // ✅ your template ID
//         templateParams,
//         "y5gunvblEinQd0bkV"    // ✅ your public key
//       )
//       .then(
//         () => {
//           setSuccessMsg("✅ Message sent successfully! We’ll contact you soon.");
//           setErrorMsg("");

//           setName("");
//           setEmail("");
//           setPhone("");
//           setSubject("");
//           setMessage("");
//           setLoading(false);

//           setTimeout(() => setSuccessMsg(""), 4000);
//         },
//         () => {
//           setErrorMsg("❌ Failed to send message. Please try again.");
//           setSuccessMsg("");
//           setLoading(false);

//           setTimeout(() => setErrorMsg(""), 4000);
//         }
//       );
//   };

//   return (
//     <div className="relative min-h-screen bg-slate-50 text-slate-900 mt-6">
//       {/* Background Effects */}
//       <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/50 to-transparent" />
//       <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-[10%] left-[-5%] w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

//       {/* Header */}
//       <div className="relative pt-24 pb-16 px-4 text-center">
//         <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
//           We’d love to{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
//             hear from you
//           </span>
//         </h1>
//         <p className="max-w-2xl mx-auto text-lg text-slate-600">
//           Have questions? Fill out the form and our team will reach out.
//         </p>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 pb-24">
//         {/* Info Cards */}
//         <div className="grid md:grid-cols-3 gap-6 mb-20">
//           <InfoCard
//             icon={<MapPin className="w-6 h-6" />}
//             title="Visit our Office"
//             subtitle="Headquarters"
//             value="H-45/B, Abul Fazal Enclave-1, Jamia Nagar, New Delhi 110025"
//             action="View on Map"
//           />
//           <InfoCard
//             icon={<Mail className="w-6 h-6" />}
//             title="Email Us"
//             subtitle="Support Team"
//             value="Shail.moonlight@gmail.com"
//             action="Send Email"
//           />
//           <InfoCard
//             icon={<Phone className="w-6 h-6" />}
//             title="Call Us"
//             subtitle="Mon–Fri | 8am–5pm"
//             value="+91 8587860420"
//             action="Call Now"
//           />
//         </div>

//         {/* Form + Map */}
//         <div className="grid lg:grid-cols-12 gap-8 bg-white rounded-3xl shadow-xl border overflow-hidden">
//           {/* Form */}
//           <div className="lg:col-span-5 p-8">
//             <h3 className="text-2xl font-bold mb-4">Send us a message</h3>

//             {/* Success / Error Message */}
//             {successMsg && (
//               <div className="mb-4 rounded-lg bg-green-50 border border-green-200 p-3 text-green-700 font-medium">
//                 {successMsg}
//               </div>
//             )}
//             {errorMsg && (
//               <div className="mb-4 rounded-lg bg-red-50 border border-red-200 p-3 text-red-700 font-medium">
//                 {errorMsg}
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full border rounded-md p-2"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full border rounded-md p-2"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <input
//                 type="tel"
//                 placeholder="Your Phone"
//                 className="w-full border rounded-md p-2"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//               <input
//                 type="text"
//                 placeholder="Subject"
//                 className="w-full border rounded-md p-2"
//                 value={subject}
//                 onChange={(e) => setSubject(e.target.value)}
//                 required
//               />
//               <textarea
//                 placeholder="Your Message"
//                 rows={5}
//                 className="w-full border rounded-md p-2"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 required
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-60"
//               >
//                 {loading ? "Sending..." : "Send Message"}
//                 <Send className="w-4 h-4" />
//               </button>
//             </form>
//           </div>

//           {/* Map */}
//           <div className="lg:col-span-7 relative min-h-[400px]">
//             <iframe
//               title="map"
//               src="https://www.google.com/maps?q=Abul+Fazal+Enclave-1,+Jamia+Nagar,+New+Delhi&output=embed"
//               className="absolute inset-0 min-w-full h-full grayscale hover:grayscale-0 transition"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;



import { useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser"; 

/* ---------------- INFO CARD COMPONENT ---------------- */
const InfoCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  value: string;
  action: string;
  link?: string;
}> = ({ icon, title, subtitle, value, action, link }) => (
  <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
    <div className="flex items-center mb-4 text-blue-600">{icon}</div>
    <h4 className="font-bold text-lg mb-1">{title}</h4>
    <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
    <p className="text-gray-700 mb-2">{value}</p>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-medium flex items-center gap-1 hover:underline"
      >
        {action} <Send className="w-4 h-4" />
      </a>
    )}
  </div>
);

/* ---------------- MAIN CONTACT COMPONENT ---------------- */
const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: name,
      email,
      phone,
      subject,
      message,
    };

    emailjs
      .send(
        "service_ydc3erg", // ✅ your service ID
        "template_wicg04p", // ✅ your template ID
        templateParams,
        "y5gunvblEinQd0bkV" // ✅ your public key
      )
      .then(
        () => {
          setSuccessMsg("✅ Message sent successfully! We’ll contact you soon.");
          setErrorMsg("");
          setName("");
          setEmail("");
          setPhone("");
          setSubject("");
          setMessage("");
          setLoading(false);
          setTimeout(() => setSuccessMsg(""), 4000);
        },
        () => {
          setErrorMsg("❌ Failed to send message. Please try again.");
          setSuccessMsg("");
          setLoading(false);
          setTimeout(() => setErrorMsg(""), 4000);
        }
      );
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 mt-6">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/50 to-transparent" />
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[10%] left-[-5%] w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

      {/* Header */}
      <div className="relative pt-24 pb-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          We’d love to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            hear from you
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600">
          Have questions? Fill out the form and our team will reach out.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-24">
        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <InfoCard
            icon={<MapPin className="w-6 h-6" />}
            title="Visit our Office"
            subtitle="Headquarters"
            value="H-45/B, Abul Fazal Enclave-1, Jamia Nagar, New Delhi 110025"
            action="View on Map"
            link="https://maps.google.com?q=Abul+Fazal+Enclave-1,+Jamia+Nagar,+New+Delhi"
          />
          <InfoCard
            icon={<Mail className="w-6 h-6" />}
            title="Email Us"
            subtitle="Support Team"
            value="Shail.moonlight@gmail.com"
            action="Send Email"
            link="mailto:Shail.moonlight@gmail.com"
          />
          <InfoCard
            icon={<Phone className="w-6 h-6" />}
            title="Call Us"
            subtitle="Mon–Fri | 8am–5pm"
            value="+91 8587860420"
            action="Call Now"
            link="tel:+918587860420"
          />
        </div>

        {/* Form + Map */}
        <div className="grid lg:grid-cols-12 gap-8 bg-white rounded-3xl shadow-xl border overflow-hidden">
          {/* Form */}
          <div className="lg:col-span-5 p-8">
            <h3 className="text-2xl font-bold mb-4">Send us a message</h3>

            {/* Success / Error Message */}
            {successMsg && (
              <div className="mb-4 rounded-lg bg-green-50 border border-green-200 p-3 text-green-700 font-medium">
                {successMsg}
              </div>
            )}
            {errorMsg && (
              <div className="mb-4 rounded-lg bg-red-50 border border-red-200 p-3 text-red-700 font-medium">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border rounded-md p-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full border rounded-md p-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                className="w-full border rounded-md p-2"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full border rounded-md p-2"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="w-full border rounded-md p-2"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="lg:col-span-7 relative min-h-[400px]">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Abul+Fazal+Enclave-1,+Jamia+Nagar,+New+Delhi&output=embed"
              className="absolute inset-0 min-w-full h-full grayscale hover:grayscale-0 transition"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
