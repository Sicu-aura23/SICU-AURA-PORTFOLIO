"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import previewBg from "@/public/Preview-bg.png";
import preAvatar from "@/public/Rectangle 288.png";
import { useRouter } from 'next/navigation'

export default function Page() {
  const [formData, setFormData] = useState({});
  const router = useRouter();
  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    console.log(storedFormData)
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formData);
    // localStorage.removeItem("formData");
    router.push("/Career/3bKAYuaccKaJXKnP1rQv/register/preview/submit");
  };

  return (
    <div
    className="image-div"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Image
        src={previewBg}
        alt="Preview Background"
        layout="fill"
        objectFit="cover"
      />
<div className="main-div ">
       <div className=" pre-main-div font-Inknut">
        
        <div
        className="pre-div overflow-auto"
          style={{ backgroundColor: "white", color: "black", borderRadius:"5px", padding: "30px",}}
        >
          <h1 className="text-xl">Profile Information</h1>
          <div className="flex flex-row justify-between gap-96 my-5">
            <div className="flex flex-col gap-2 text-xs">
              <p>Name: <span className="edu-value-font-color"> {formData.firstName}None</span></p>
              <p>Email: <span className="edu-value-font-color">{formData.email}None</span></p>
              <p>Phone: <span className="edu-value-font-color">{formData.phone}None</span></p>
              <p>Why best fit:<span className="edu-value-font-color"> {formData.whyBestFit}None</span></p>
              <p>LinkedIn: <span className="edu-value-font-color">{formData.linkedIn}</span>None</p>
              <p>Additional Link: <span className="edu-value-font-color">{formData.additionalLink}None</span></p>
            </div>
            <div>
              <Image className="avatar" src={preAvatar} alt="avatar" />
            </div>
          </div>
          <hr></hr>
           <div className="py-5">
            <h1 className="text-xl py-5">Education</h1>
            <div className=" flex flex-row justify-between flex-wrap items-start text-xs">
              <div className="">
                <p  className="py-5">Higest Degree / Course Name : <span className="edu-value-font-color">B.Tech</span></p>
                <p  className="py-5">Stream Name :<span className="edu-value-font-color"> Computer Science</span></p>
              </div>
              <div>
                <p  className="py-5">Current CGPA : <span className="edu-value-font-color"> 8.25</span></p>
                <p  className="py-5">
                  Institution Name : <span className="edu-value-font-color"> Uttarpara College of Engineering and
                  Management</span></p>
                
              </div>
              <div>
                <p  className="py-5">Passing Year : <span className="edu-value-font-color"> 2025</span></p>
                <p className="py-5">Year Gap : <span className="edu-value-font-color"> No </span></p>
              </div>
             <div>
                <p  className="py-5">Resume: <span className="edu-value-font-color"> Ayushman Khosmant Resume.pdf </span></p>

             </div>
            </div>
          </div>
       <hr></hr>
          <div className="py-5">
           <h1 className="text-xl py-5">Work Authorization</h1>
           <div className="text-xs">
            <ul className="flex justify-start py-5  flex-wrap">          
                <li className="me-20"  > ●⁠ Are you leagaly authorized to work in india ?
                </li >
                <li className="" style={{border:"solid 1px black",padding:"2px 90px 2px 91px"}}>
                yes
            </li>
            </ul>
            <ul className="flex justify-start py-5  flex-wrap">          
                <li className="me-16" style={{marginRight:"117px"}} > ●⁠ How many years you have experience ?
                
                </li >
               
                <li className="" style={{border:"solid 1px black",padding:"2px 100px 2px 100px"}}>
                5
            </li>
            </ul>
            <ul className="flex justify-start py-5 flex-wrap">          
                <li className="me-20" style={{marginRight:"49px"}} > ●⁠ In order to obtain or maintain employment eligibility,
                
                <li>will you now or in the future require the company's sponsorship</li>
                <li> for an immigration-related employment benefit (ie, a work visa work permit, etc) ?</li>
                </li >
               
                <span className=" " style={{border:"solid 1px black",padding:"2px 100px 2px 100px",height:"30px"}}>
                yes
            </span>
            </ul>
           </div>
           <div>
            <input></input>
           </div>
          </div>
          <hr></hr>
          <div className="py-5">
           <h1 className="text-xl py-5">Additional Information</h1>
           <div className="text-xs">
            <ul className="flex justify-start py-5  flex-wrap ">          
                <li className="me-20"  > ●⁠ Are you willing to join this non-paid internship ?
                </li >
                <li className="" style={{border:"solid 1px black",padding:"2px 90px 2px 91px"}}>
                yes
            </li>
            </ul>
            <ul className="flex justify-start py-5  flex-wrap">          
                <li className="" style={{marginRight:"170px"}} > ●⁠ After how many days you can join ?
                
                </li >
               
                <li className="" style={{border:"solid 1px black",padding:"2px 100px 2px 100px"}}>
                5
            </li>
            </ul>
             <div>
              
              <p className="py-5">  ● ⁠Tell me about yourself.</p>
              <textarea  className="text-xs w-full h-36" style={{border:"solid 1px lightgray",borderRadius:"5px"}}></textarea>
             </div>
             <div>
              <p className="py-5">  ● What are your strengths and weaknesses?</p>
              <textarea  maxLength="200" className="text-xs w-full h-36" style={{border:"solid 1px lightgray",borderRadius:"5px"}}></textarea>
             </div>
             <div>
              <p className="py-5">  ● What are your strengths and weaknesses?</p>
              <textarea  maxLength="200" className="text-xs w-full h-36" style={{border:"solid 1px lightgray",borderRadius:"5px"}}></textarea>
             </div>
             <div>
              <p className="py-5">  ● How do you handle conflict?</p>
              <textarea  maxLength="200" className="text-xs w-full h-36" style={{border:"solid 1px lightgray",borderRadius:"5px"}}></textarea>
             </div>
             <div>
              <p className="py-5">  ● Why do you think that yourself as a best fit for this role ?</p>
              <textarea  maxLength="200" className="text-xs w-full h-36" style={{border:"solid 1px lightgray",borderRadius:"5px"}}></textarea>
             </div>
           </div>
           <div className="text-xs ">
           <ul className="flex justify-start py-5 flex-wrap flex-shrink">          
                <li className="me-20"  > ●⁠ LinkdIn Link
                </li >
                <li className=" overflow-auto" style={{border:"solid 1px black",padding:"2px 90px 2px 91px"}}>
                http://localhost:3000/Career/3bKAYuaccKaJXKnP1rQv/register/preview
            </li>
            </ul>
            <div className="flex justify-start py-5 ">          
                <span className="me-12"  > ●⁠ Additional Linkds
                </span >
                <span className="overflow-auto" style={{border:"solid 1px black",padding:"2px 90px 2px 91px"}}>
                http://localhost:3000/Career/3bKAYuaccKaJXKnP1rQv/register/preview
            </span>
            </div>
           </div>
          </div>
        </div>
      </div> 
      <div className="flex justify-end  pe-28 pt-5 ">
        <button type="button" style={{backgroundColor:"white",color:"#0C3D58",padding:"5px 30px 5px 30px",border:" solid 1px #0C3D58",borderRadius:"3px",margin:"0px 20px 0px 20px"}}>Edit</button>
        <button onClick={handleSubmit} type="button"style={{backgroundColor:"#0C3D58",color:"white",padding:"5px 20px 5px 20px",border:" solid 1px #0C3D58",borderRadius:"3px"}}>Submit</button>
      </div>

</div>
    </div>
  );
}
