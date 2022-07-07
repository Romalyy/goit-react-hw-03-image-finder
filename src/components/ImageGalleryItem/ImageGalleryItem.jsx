import PropTypes from "prop-types";
import s from "./imageGalleryItem.module.css";

const ImageGalleryItem = ({ onClick, tags, webformatURL, largeImageURL }) => {
    return (
        <li
            className={s.gallery_item}>
            <img
                className={s.image}
                src={webformatURL}
                alt={tags}
                onClick={() => onClick(largeImageURL, tags)}/>
        </li>
    )
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};