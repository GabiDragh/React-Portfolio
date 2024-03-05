import React from 'react'

const Projects = () => {
  return (
    <div>
      {/* render navbar */}
      {/* TODO: useState to assign each project to a card - Sponge Bob activity */}
      <div className="card" style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  )
}

export default Projects;