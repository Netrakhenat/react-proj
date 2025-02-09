import React from "react";
import "./MobContent.css";

function MobContent({ note }) {
  return (
    <div className="m_notes_content_body">
      
      <div className="m_notes_content_details">
        {note.content.split("\n").map((line,index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <div className="m_notes_content_date_time">
        <div className="m_notes_content_time">{note.time} . </div>
        <div className="m_notes_content_date">{note.date}</div>
      </div>
    </div>
  );
}

export default MobContent;
