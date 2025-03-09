import lakeView from '../assets/lake-image.jpg';
import '../styles/Article.css';

const Article = () => {
  return (
    <article className='article-section'>
      <div className='article-grid'>
        <div className='text-content'>
          <h1 className='article-title'>Lorem ipsum</h1>

          <div className='text-blocks'>
            <div className='text-block'>
              <h2>Excepteur eiusmod consectetur</h2>
              <p>
                Proident ipsum nisi eiusmod excepteur aliquip esse ut excepteur.
                Non excepteur sunt reprehenderit ut ex ullamco ex aliquip
                eiusmod Lorem incididunt nisi mollit nostrud, sunt velit enim
                elit ut quis officia.
              </p>
            </div>

            <div className='text-block'>
              <h2>Quis aliqua reprehenderit</h2>
              <p>
                Proident ipsum nisi eiusmod excepteur aliquip esse ut excepteur.
                Non excepteur sunt reprehenderit ut ex ullamco ex aliquip
                eiusmod Lorem incididunt nisi mollit nostrud, sunt velit enim
                elit ut quis officia.
              </p>
            </div>

            <div className='text-block'>
              <h2>Ad sit cillum amet duis commodo</h2>
              <p>
                Proident ipsum nisi eiusmod excepteur aliquip esse ut excepteur.
                Non excepteur sunt reprehenderit ut ex ullamco ex aliquip
                eiusmod Lorem incididunt nisi mollit nostrud.
              </p>
            </div>
          </div>
        </div>

        <div className='image-block'>
          <img
            src={lakeView}
            alt='Misty lake view with tree branches'
            className='gallery-image'
          />
        </div>

        <div className='text-content'>
          <h2 className='secondary-title'>
            Mollit aliquip do ipsum consectetur
          </h2>
          <p>
            Ex laborum ex qui consectetur mollit commodo. Reprehenderit
            incididunt magna ex sit velit quis ullamco. Ad eu reprehenderit si
            ut excepteur mollit. Reprehenderit incididunt magna commodo amet ex
            cupidatat elit dolor ullamco cupidat.
          </p>
        </div>

        <div className='image-block'>
          <img
            src={lakeView}
            alt='Misty lake view with tree branches'
            className='gallery-image'
          />
        </div>
      </div>
    </article>
  );
};

export default Article;
