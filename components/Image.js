import { Link } from 'react-router-dom';

const Image = ({ photo }) => {
  let url = photo.url;

  url = url.substring(url.indexOf('pexels.com'));
  url = url.substring(url.indexOf('/'));

  return (
    <Link to={url} className="gallery__link">
      <figure className="gallery__thumb">
        <img src={photo.src.large} alt={photo.alt} className="gallery__image" />
        <figcaption className="gallery__caption">{photo.alt}</figcaption>
      </figure>
    </Link>
    // <li style={{ animationDelay: `calc(20ms * ${photo.id})` }}>
    //   <a style={{ backgroundColor: photo.avg_color }} href={photo.url} target="new" rel="noopener">
    //     <img src={photo.src.large} alt={photo.alt} />
    //   </a>
    // </li>
  );
};

export default Image;
