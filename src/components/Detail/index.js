/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {useState} from 'react'
import {faApple} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './index.css'

const Detail = () => {
  const [selectedCollection, setSelectedCollection] = useState('Series 10')
  const [selectedSize, setSelectedSize] = useState('46mm')
  const [selectedCase, setSelectedCase] = useState('Aluminum')
  const [selectedBand, setSelectedBand] = useState('Black Solo Loop')
  const [price, setPrice] = useState(429)
  const [isSideView, setIsSideView] = useState(false)

  // Images for different collections
  const collectionImages = {
    'Series 10':
      'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_SR_S10_VW_PF+watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80',
    SE:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTXrlvQqsHzav6Ol911j_CD82DEZqONk4mNxK2zu3CPgUWa7JrGkyI9_RCP7FFDSkEfU7VUn5maNp-kf1mMvYiL3ujQW_t6',
    Hermès:
      'https://assets.hermes.com/is/image/hermesedito/P_11_1_EDITO_CARROUSEL_3?fit=wrap%2C0&wid=414',
  }

  const sideViewImages = {
    'Series 10':
      'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLJ3ref_VW_34FR+watch-case-42-aluminum-jetblack-nc-s10_VW_34FR+watch-face-42-aluminum-jetblack-s10_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80',
    SE:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSSktMmdpOZ5B3TthRxn2uUrkGYdf60Xm9hKpp4kW0kb6LPY9xSnDh-_tsxIctqRhJpfDi1mB3tTLbf1r8A1nGtVgWO_y9q_BvMMrQIAzjccfP7ALWxA_AL',
    Hermès:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrxOSU8yqJtwZR9g-r603Wgh5zrq_PWwNe_5OYUjsOjaNtSoiYtwAgLyvBorDqwCO2WiM&usqp=CAU',
  }

  // Carousel images for SE with 44mm
  const se44mmCarouselImages = [
    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQlKi8zIYXiIIiJhJo-WXiEZh1vprbttcSnk2urZqFuc6dVZyjqCBGNVFTXbUVj6hBg6r1-3ix27I4oxVYE4_lJgayt5hjxh4Sen-2C0Eb14TUBLVCMdCID',
    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR5lPRiT_O1ZLXz3GzrWonrk2t19f4ywt-w3vcH8kMZiSDny8pl_qgMp-EGPqDwGfQcmM5cvxIUL8xUdhBRn5aP-GD6UoItl4l6JOttCMUfjC0Z7fZKQKjwEw',
  ]

  // Carousel images for Series 10 with 44mm
  const series10CarouselImages = [
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_SR_S10_VW_PF+watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80',
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLJ3ref_SR_S10_VW_PF+watch-case-42-aluminum-jetblack-nc-s10_VW_PF+watch-face-42-aluminum-jetblack-s10_VW_PF?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=ZEtjMnQwRTFwMFpJcFR6T0QySW5EVE5MS0NHdU9pQ1oreFZMVHc2eWpaOUlWeG93YjFTbVpHWEo5KzB4cDMzN3B2QjR6TEZ4ZThxM3VqYkZobmlXM2xUSlh3SjBwc2dvdjExQkpUVUd0YnN1USs1b3UrbjRBN0I4YzZxZklZWjZNK3lsZE1HRkRZTjZSeEJXd0NXdmpoNzQyZmlkSVFmbjY5Y04rQ0tZTmFKSHU3NmZyQzBTVVZ5ZWlSanV5V2tOdkZ1emhkYWNycmJka1dOU01FKzNBcllyZWVpdkpPTHY3MlZadFg1My9uaUtQOUhDZ3lOdkpTWWtaMGxGM2FhSw',
  ]

  // URL for special image (for SE or Series 10 with Stainless Steel case)
  let specialImageUrl = null
  if (selectedCollection === 'SE' && selectedBand === 'Sport Band') {
    specialImageUrl =
      'https://apkegadget.com/wp-content/uploads/2024/03/MT3Q3ref_VW_34FRwatch-case-44-aluminum-silver-nc-se_VW_34FRwatch-face-44-aluminum-silver-se_VW_34FR-1.jpg'
  } else if (
    selectedCollection === 'SE' &&
    selectedCase === 'Stainless Steel'
  ) {
    specialImageUrl =
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MC7L4ref_SR_S10_VW_PF+watch-case-46-titanium-slate-cell-s10_VW_PF+watch-face-46-titanium-slate-s10_VW_PF?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1724336463964'
  } else if (
    selectedCollection === 'Series 10' &&
    selectedCase === 'Stainless Steel'
  ) {
    specialImageUrl =
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MC7K4ref_SR_S10_VW_PF+watch-case-46-titanium-gold-cell-s10_VW_PF+watch-face-46-titanium-gold-s10_VW_PF?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1724336463964'
  } else if (
    selectedCollection === 'Hermès' &&
    selectedCase === 'Stainless Steel'
  ) {
    specialImageUrl =
      'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJW3ref_VW_34FR+watch-case-46-titanium-silver-cell-hermes10s_VW_34FR+watch-face-46-radial-blanc-hermes10s_VW_34FR?wid=2000&hei=2000&fmt=png-alpha&.v=bmlDS2tTT2I3YXhiY1p5bVdLVXRVZm9DdHd2YU5FTjZTSXRTTFUzdU1PdUNHN25LcnpMK29yekV1VVdNbVVYRG02cXZmNmNVMWdYa3dYVFN4R1NmYm5qblBjd2JiYm5raG5NaEt4aVI1UUlNNlNmamNYYlk0ZkVxWkdCb3hBb01USHZVNzlpcjF1MTlOMG5yeVZmZ0hsQ3RPTys0V0JDL1E3U0xPSTVXcjNNRTJsZmRCaDlhOEFTanNHbHplV0g1b1dXTHJybUJjS1B2RTEwTnoyY3dYeVMwTk5hcm9YVTZyNkhyZ1pFekZyRQ'
  }

  // Decide which image to display (side view or regular)
  const currentImage = isSideView
    ? sideViewImages[selectedCollection]
    : collectionImages[selectedCollection]

  // Choose the special image URL if conditions match, else use the regular one
  const imageToDisplay = specialImageUrl || currentImage

  const getCarouselImages = () => {
    if (selectedCollection === 'SE' && selectedSize === '44mm') {
      return se44mmCarouselImages
    }
    if (selectedCollection === 'Series 10' && selectedSize === '44mm') {
      return series10CarouselImages
    }
    return []
  }

  const handleCollectionChange = e => {
    setSelectedCollection(e.target.value)
    setIsSideView(false) // Reset to front view on collection change
  }

  const handleSideViewClick = e => {
    e.preventDefault()
    setIsSideView(true)
  }

  const handleSizeChange = e => {
    const size = e.target.value
    setSelectedSize(size)
    setPrice(size === '44mm' ? 399 : 429)
  }

  const handleCaseChange = e => {
    setSelectedCase(e.target.value)
    // Keep the selected band intact unless you specifically want to reset it
  }

  const handleBandChange = e => {
    setSelectedBand(e.target.value)
  }

  const carouselImages = getCarouselImages()

  return (
    <div className="detail-container">
      {/* Header */}
      <header className="detail-header">
        <h1 className="home-logo">
          <FontAwesomeIcon icon={faApple} /> WATCH
        </h1>
        <select
          className="collection-dropdown"
          value={selectedCollection}
          onChange={handleCollectionChange}
        >
          {Object.keys(collectionImages).map(collection => (
            <option key={collection} value={collection}>
              {collection}
            </option>
          ))}
        </select>
      </header>

      {/* Watch Preview */}
      {carouselImages.length > 0 ? (
        <div className="carousel">
          {carouselImages.map((url, index) => (
            <img
              key={`${selectedCollection}-${selectedSize}-${index}`}
              src={url}
              alt={`Carousel ${index}`}
              className="carousel-image"
            />
          ))}
        </div>
      ) : (
        <div className="watch-preview">
          <img src={imageToDisplay} alt={`Apple Watch ${selectedCollection}`} />
        </div>
      )}

      {/* Watch Info */}
      <div className="watch-info">
        <a href="/" className="side-view" onClick={handleSideViewClick}>
          Side view
        </a>
        <h2>APPLE WATCH {selectedCollection.toUpperCase()}</h2>
        <p>{`${selectedSize} Jet Black ${selectedCase} Case with ${selectedBand}`}</p>
        <h3>From ${price}</h3>
      </div>

      {/* Options */}
      <div className="watch-options">
        <div className="option-group">
          <label htmlFor="size-select">Size:</label>
          <select
            id="size-select"
            className="option-dropdown"
            value={selectedSize}
            onChange={handleSizeChange}
          >
            <option value="46mm">46mm</option>
            <option value="44mm">44mm</option>
          </select>
        </div>
        <div className="option-group">
          <label htmlFor="case-select">Case:</label>
          <select
            id="case-select"
            className="option-dropdown"
            value={selectedCase}
            onChange={handleCaseChange}
          >
            <option value="Aluminum">Aluminum</option>
            <option value="Stainless Steel">Stainless Steel</option>
          </select>
        </div>
        <div className="option-group">
          <label htmlFor="band-select">Band:</label>
          <select
            id="band-select"
            className="option-dropdown"
            value={selectedBand}
            onChange={handleBandChange}
          >
            <option value="Black Solo Loop">Black Solo Loop</option>
            <option value="Sport Band">Sport Band</option>
          </select>
        </div>
      </div>
      {/* Save Button */}
      {/* Save Button */}
      <button type="button" className="save-button">
        Save and Proceed to Cart
      </button>
    </div>
  )
}

export default Detail
