// src/components/Projects.tsx
import '../styles/Projects.css';

export default function Projects() {
    return (
      <div className="projects-container">  
        <div className="project-item">
          <h3 className="project-title">Curo</h3>
          <ul className="project-details">
            <li>
              All-encompassing online medical service provider, allowing users to locate and book appointments with doctors and hospitals, which received 1st place in the Postman API hackathon.
            </li>
            <li>
              Top medicine products price comparison using data scraping of top online pharmacies.
            </li>
            <li>
              Integration with Medichat to assist users with general health ailments using Corrective RAG approach with Llama 3 language model built using Langchain and Langgraph.
            </li>
            <li>
              Insurance premium predictor using Kaggle database with 94% accuracy using LightGBM model.
            </li>
          </ul>
        </div>
  
        <div className="project-item">
          <h3 className="project-title">MediChat</h3>
          <ul className="project-details">
            <li>
              Developed MediChat, an advanced RAG chatbot with multimodal capabilities, during Microsoft MS Hackathon.
            </li>
            <li>
              Utilized state-of-the-art language models, particularly Llama 2 model, to provide contextually relevant medical responses.
            </li>
            <li>
              Integrated ChatGPT Vision API to enhance multimodal functionality.
            </li>
          </ul>
        </div>
  
        <div className="project-item">
          <h3 className="project-title">VoiceTrainer</h3>
          <ul className="project-details">
            <li>
              Developed a Python tool to record, compare, and analyze users’ singing by measuring pitch and amplitude against a given song.
            </li>
            <li>
              Graphically plots the frequencies and amplitude on a 3D graph along time to compare two different audio files.
            </li>
          </ul>
        </div>
  
        <div className="project-item">
          <h3 className="project-title">ShowHub</h3>
          <ul className="project-details">
            <li>
              An online movie ticket booking platform for customers to book tickets and for admins to manage theaters and schedules.
            </li>
            <li>
              Implemented database triggers to streamline data management and integrated analytical features to provide movie revenue insights, aiding business decision-making.
            </li>
          </ul>
        </div>
      </div>
    );
  }