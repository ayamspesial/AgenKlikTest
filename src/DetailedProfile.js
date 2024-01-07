import React from "react";
import "./MaidHome.css";
import "./contactkilk.css";
import DefaultPhoto from "./360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Listing() {
  const location = useLocation();
  const stateData = location.state;
  const navigate = useNavigate()
  
const state = {
firstName : stateData.firstName,
lastName: stateData.lastName

}
 
   
   
    return (
      <div className="DetailedContainer">
        <div className="MiniProfile">
          <div className="ProfilePay">
          <img src={DefaultPhoto} alt="Profile" id="detailedProfilepic" />
          <button id="PaymentButton" onClick={() => navigate('/Listing/payment', { state })}>
  BOOKING
</button>

          </div>
          <h1 className="BasicDetails">{stateData.firstName} {stateData.lastName}, {stateData.Age} | {stateData.WorkExperience} {stateData.Location}</h1>
          <h2 className="WorkDetails">{stateData.occupation} | {stateData.askingSalary} P/M</h2>
          <h1 className="NegotiableText">
            
            {stateData.salaryNegotiable? <p className="CanNegotiate">Boleh Dinegosiaskian✅</p>: "tidak bisa dinegosiaskian"}</h1>
           
        
        
        </div>
        <div className="Body">
        <div className="QuestionContainer">
            <h1 style={{ fontSize: '50px', borderBottom: '2px solid black', fontWeight: 'bold' }}> TENTANG SAYA </h1>
            <h2> {stateData.question1} </h2>
          </div>
          <div  className="QuestionContainer"> 
            <h1 style={{ fontSize: '40px', borderBottom: '1px dashed black', fontWeight: 'bold' }}>APAKAH YANG KALIAN BIKIN LEBIH MEMENUHI SYARAT DARI SETIAP ORANG?</h1>
            <h2>{stateData.question2}</h2>
          </div>



          <div className="FactsAboutUser">
          <div className="Pets">
            <h1 style={{ fontSize: '40px', borderBottom: '1px dashed black', fontWeight: 'bold' }}> NYAMAN DENGAN HEWAN PELIHARAAN</h1>
            <div className="CheckboxContainer">
              <h1>{stateData.Pets?"✅" : "❌"}</h1>

              {stateData.Pets ? (
  <div>
    {stateData.reasoning === "" ? (
      <>
        <h1>PENGCCUIAN</h1>
        <h2>{stateData.reasoning}</h2>
      </>
    ) : null}
  </div>
) : null}

          <div className="Qualifikasi">
            <h1 style={{ fontSize: '40px', borderBottom: '1px dashed black', fontWeight: 'bold' }}>QUALIFIKASI</h1>
            <h1>{stateData.qualifications}</h1>

            <div className="Kekuataan">
              <h1 style={{ fontSize: '40px', borderBottom: '1px dashed black', fontWeight: 'bold' }}> KEKUATAAN</h1>
              <ul className="Strengths">
                <li className="Strengths">{stateData.strength1}</li>
                <li className="Strengths">{stateData.strength2}</li>
                <li className="Strengths">{stateData.strength3}</li>
                <li className="Strengths">{stateData.strength4}</li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }

