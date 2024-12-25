"use client"
import { MdAttachEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { BiSolidMessageAltError } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";

export default function ContactUsDetails(){
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        comment: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);handelEmailSend(formData)
    };
    const handelEmailSend=async(formData)=>{
        console.log(formData) 
        const formdataNew={Email:formData.email,Name:`${formData.firstName} ${formData.lastName}`,Number:formData.phoneNumber,Description:formData.comment}
        console.log("formdataNew",formdataNew)
        const response = await axios.post('/api/sendEmail',formdataNew)
        // console.log("Status","--->",response.status)
        if(response.status===200){
          console.log("SCUCESSS")
            // toast.success('Email Send Succesfully')
        }
        else{
            console.log("FAIELD:EDE:D")
            // toast.error("Cannot send Email")
        }
       
    }
    return(
        <div id="contact" className=" w-full min-h-screen bg-gradient-to-tr from-sky-300 via-orange-200 to-sky-300 px-3 py-10 flex items-center flex-col gap-6 ">
            <h1 className=" text-[2.6rem] font-semibold tracking-wider mt-10">Let’s Build the Future Together</h1>
            <div className=" w-full h-screen  border-zinc-950 py-5 flex gap-4">
                <div className=" w-[50%] h-full  py-4 pl-[5%]">
                    <h1 className=" text-[3rem] font-[500] tracking-wide p">We’d Love to Hear from You</h1>
                    <p className=" text-[1.2rem] text-zinc-700 w-[80%]">Connect with Techtonic Lab to unlock opportunities: From certifications and expert consultancy to internships and placements, we're here to support your journey to success.</p>
                    <div className=" w-[70%] mt-10 h-auto">
                        <div className=" flex px-8 items-center gap-2 text-[1.4rem]">
                            <MdAttachEmail className=" text-[1.6rem] text-sky-700"/>
                            <p className=" mb-1 hover:underline underline-offset-2 ">demo@tectoniclab.tech</p>
                        </div>
                        <div className=" flex px-8 items-center gap-2 text-[1.4rem] mt-3">
                            <PiPhoneCallFill className=" text-[1.6rem] text-sky-700"/>
                            <p className=" ">378217-321-312-32-2321-312</p>
                        </div>
                    </div>
                    <h2 className=" text-[1.4rem] w-[70%] font-semibold leading-8 mt-10">We're here to support you—reach out to Techtonic Lab for certifications, consultancy, internships, and placement opportunities!</h2>
                    <div className=" flex items-center justify-center w-full h-auto pt-6 gap-8">
                        <div className=" w-[18rem] h-[16rem] border rounded-lg p-4 flex flex-col gap-3 bg-black text-zinc-100">
                            <div className=" text-[1.5rem] font-[500] flex items-center gap-2 text-orange-400">
                                <div className="w-10 h-10 rounded-full bg-zinc-100 grid place-items-center">
                                    <BsFillPatchQuestionFill className=" text-sky-600 text-[1.8rem] "/>
                                </div>
                                Customer Support</div>
                            <p className=" px-3">Need help? Our support team is here to assist with certifications, consultancy, internships, or placements. Reach out for a seamless experience with Techtonic Lab!</p>
                        </div>
                        <div className=" w-[22rem]  h-[16rem] border rounded-lg p-4 flex flex-col gap-3 bg-black text-zinc-100">
                        <div className=" text-[1.5rem] font-[500] flex items-center gap-2 text-orange-400">
                                <div className="w-10 h-10 rounded-full bg-zinc-100 grid place-items-center">
                                    <BiSolidMessageAltError className=" text-sky-600 text-[1.8rem] "/>
                                </div>
                                Feedback & Suggestions</div>
                        <p className=" px-3">Your feedback matters to us! Share your thoughts, suggestions, or ideas to help Techtonic Lab improve and grow. Together, we can create even better opportunities and experiences for students and professionals, driving innovation and success forward.</p>
                        </div>

                    </div>
                </div>
                <div className=" w-[50%] h-full  py-4 pl-[5%] flex ">
                    <div className=" w-[90%] h-[100%] rounded-xl  shadow-md shadow-orange-400 py-8 px-5 bg-sky-700 bg-opacity-35 backdrop-blur-md flex flex-col items-center  ">
                        <h1 className=" text-[3rem]  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-orange-700 to-zinc-900 text-center">Get in Touch</h1>
                        <p className=" w-[90%] text-[1rem] tracking-wide leading-5">You can reach out to us anytime, 24/7! Whether you have questions, need assistance, or want to share your feedback, our team is always here to support you, day or night.</p>
                        <form onSubmit={handleSubmit} className="pt-14 space-y-5">
            <div className="flex items-center gap-4">
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="px-3 py-2 outline-none w-[16rem] rounded-md bg-zinc-300"
                    placeholder="First Name"
                />
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="px-3 py-2 outline-none w-[16rem] rounded-md bg-zinc-300"
                    placeholder="Last Name"
                />
            </div>
            <div className="relative flex items-center">
                <IoMail className="text-[1.3rem] text-zinc-900 absolute left-2"/>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-9 w-full px-3 py-2 rounded-md bg-zinc-300"
                    placeholder="Email"
                />
            </div>
            <div className="relative flex items-center">
                <PiPhoneCallFill className="text-[1.3rem] text-zinc-900 absolute left-2"/>
                <input
                    type="number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-md bg-zinc-300 pl-9"
                    placeholder="Phone Number"
                />
            </div>
            <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className="w-full h-[20vh] rounded-md bg-zinc-300 px-4 py-2"
                placeholder="Comment"
            />

            <div className="w-full py-5 flex items-center justify-center">
                <button
                    type="submit"
                    className="px-6 py-2 rounded-md bg-zinc-900 text-zinc-100"
                >
                    Let's Talk
                </button>
            </div>
        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}