import React from 'react'
import { Link } from 'react-router-dom'
import projectsData from '../utils/projectsData'

const ProjectGallery = () => {
  return (
    // TODO:render navbar
    // FIXME: mapping not working??? 
    <div className='container mt-5'>
      <div className='row'>
        {projectsData.map((projectsData, index) =>
        <div key={index}
        className='col-md-4 mb-4'>
          <Project projectsData={projectsData} />
          </div>
          )}
      </div>
    </div>
  );
}

export default ProjectGallery;