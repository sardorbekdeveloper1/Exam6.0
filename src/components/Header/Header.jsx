import React from "react";
import Notification from "../../assets/images/notification.png";

function Header() {
  const handleLogOut = () => {
    // Remove tokens from localStorage
    window.localStorage.removeItem('newToken');
    window.localStorage.removeItem('token');
    
    // Redirect to home page
    window.location.href = '/'; // Redirect to the home page
  };

  return (
    <div className="flex items-center justify-between h-[95px] bg-[#FCFAFA]">
      <p className="ml-[140px] text-[16px]">
        Learn how to launch faster <br /> watch our webinar for tips from our
        experts and get a limited time offer.
      </p>
      <div className="flex items-center justify-center mr-[127px] space-x-[48px]">
        <img src={Notification} alt="Notification" />
        <button onClick={handleLogOut} className="bg-[#509CDB] rounded-md py-[12px] px-[14px] text-white text-[14px]">
          Log out
        </button>
      </div>
    </div>
  );
}

export default Header;
