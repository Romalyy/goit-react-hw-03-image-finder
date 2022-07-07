import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";
import s from "./imagegallery.module.css";

// export default function ImageGallery({ items, onClick }) {
//    const elements = items.map(({ id, ...rest }) => (
//     <ImageGalleryItem onClick={onClick} key={id} {...rest} />
//   ));
//     return (
//         <ul className={s.image_gallery}>
//             {elements}
//         </ul>
//     )
// }

// ImageGallery.defaultProps = {
//   items: [],
// };

// ImageGallery.propTypes = {
//     items: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             webformatURL: PropTypes.string.isRequired,
//             tags: PropTypes.string.isRequired,
//             largeImageURL: PropTypes.string.isRequired,
//         })
//     ),
//     onClick: PropTypes.func.isRequired,
// }

function ImageGallery({ items, onClick }) {
  const elements = items.map(({ id, ...rest }) => (
    <ImageGalleryItem key={id} {...rest} onClick={onClick} />
  ));

  return <ul className={s.image_gallery}>{elements}</ul>;
}

export default ImageGallery;


ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),)
};