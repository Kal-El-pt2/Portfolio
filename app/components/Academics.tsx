// src/components/Academics.tsx
import '../styles/Academics.css';

export default function Academics() {
    return (
      <div className="academics-container">
        <h2 className="academics-header">ACADEMICS</h2>
        <div className="academics-content">
          <div className="academics-item">
            <p className="academics-highlight">BITS Pilani Hyderabad - 8.12 CGPA</p>
          </div>
          <div className="academics-item">
            <p>Class 12th CBSE Boards - 94%</p>
            <p>Class 10th CBSE Boards - 94%</p>
          </div>
          <div className="academics-item">
            <h3 className="academics-subheader">Ranked Exams:</h3>
            <ul className="academics-list">
              <li>JEE Advance - AIR 6919 (Top 1 percentile)</li>
              <li>JEE Mains - 99.11 percentile</li>
              <li>BITSAT - Received Merit Scholarship based on BITSAT score</li>
              <li>KYPY - 3678 (Received Certificate of Merit)</li>
              <li>IOQM - Received Certificate of Merit</li>
              <li>IOQC - Received Certificate of Merit</li>
              <li>STSE - Received Certificate of Merit (Both in Class 10th and Class 12th)</li>
            </ul>
          </div>
        </div>
      </div>
    );
}