import React, { useState, useEffect, useRef } from "react";
import "./PhonePg.css";
import MobCreateNotes from "../../src/components/Create Notes/MobCreateNotes";
import MobNotesTitle from "../../src/components/Notes Title/MobNotesTitle";

function PhonePg() {
  const [titles, setTitles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [groupTitlesParent, setgroupTitlesParent] = useState(
    localStorage.getItem("groupTitles") || []
  );

  useEffect(() => {
    const data = localStorage.getItem("groupTitles");
    if (data) {
      setgroupTitlesParent(JSON.parse(data));
    } else {
      setgroupTitlesParent([]);
    }
  }, []);

  useEffect(() => {
    if (groupTitlesParent.length > 0) {
      const obj = JSON.parse(localStorage.getItem("groupTitles"));
      const result = Object.keys(obj).map((key) => [obj[key]]);
      setTitles(result);
    }
  }, [groupTitlesParent]);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };
  
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };
    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return() =>{
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showPopup]);

  return (
    <div className="mobile_sidebar">
      <div className="mobile_sidebar_title">Pocket Notes</div>
      <div className="mobile_sidebar_create_notes_btn">
        <button onClick={handleClick}>
          <span id="add">+</span>
          
        </button>
      </div>
      <div className="mobile_sidebar_note_titles">
        {(
          titles.map((title, index) => (
            <MobNotesTitle
              title={title}
              key={index}
            />
          ))
        )}
      </div>
      {showPopup && (
        <div className="mobile_popup_overlay">
        <div ref={popupRef}>
            <MobCreateNotes
              groupTitlesParent={groupTitlesParent}
              setgroupTitlesParent={setgroupTitlesParent}
              onClose={handleClose}
            />
            </div>
        </div>
      )}
    </div>
  );
}

export default PhonePg;
