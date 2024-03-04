import React from 'react'
import projectsData from '../utils/projectsData'

const ProjectGallery = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        {projectsData.map((project, index) =>
        <div key={index}
        className='col-md-4 mb-4'>
          <Project project={project} />
          </div>
          )}
      </div>
    </div>
  );
}

export default ProjectGallery;