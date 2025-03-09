import '../styles/Gallery.css';
import lakeView from '../assets/lake-image.jpg';
import craftBicycle from '../assets/craft-image.jpg';


const Gallery = () => {
  return (
    <section className="gallery-section">
      <h1 className="gallery-title">Lorem ullamco</h1>
      
      <div className="gallery-grid">
        <div className="gallery-item">
          <img 
            src={lakeView} 
            alt="Misty lake view with tree branches"
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img 
            src={craftBicycle}
            alt="Traditional crafts and baskets"
            className="gallery-image"
          />
        </div>
      </div>

      <div className="gallery-text">
        <p className="text-primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur eiusmod consectetur proident Lorem 
          reprehenderit esse anim velit sit minim dolore ut officia. Commodo Lorem nulla eu exercitation eu. 
          Sunt fugiat pariatur elit est laboris quis. Esse mollit incididunt quis amet. Qui non nure incididunt laborum nisi cillum 
          consequat aliquip aliquip cillum in. Ut excepteur labore voluptate tempor cupidatat dolor eiusmod do ipsum Lorem 
          cupidatat do labore.
        </p>
        <p className="text-secondary">
          Proident dolore nisi eiusmod excepteur aliquip esse ut excepteur. Non excepteur sunt reprehenderit sit ex ullamco 
          eiusmod Lorem ipsum nisi mollit nostrud. Duis velit enim elit minim commodo qui culpa cillum duis fugiat 
          consequat pariatur.
        </p>
      </div>
    </section>
  );
};

export default Gallery;