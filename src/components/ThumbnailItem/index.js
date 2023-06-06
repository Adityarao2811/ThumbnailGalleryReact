// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {listItem, clickThumbnail} = props
  const {thumbnailUrl, thumbnailAltText} = listItem
  const onClickImage = () => {
    clickThumbnail(listItem)
  }
  return (
    <li>
      <button type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-image"
          onClick={onClickImage}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
