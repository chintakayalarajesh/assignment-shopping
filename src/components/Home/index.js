import {useNavigate} from 'react-router-dom'
import {faApple} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './index.css'

const Home = () => {
  const navigate = useNavigate() // Correct hook for navigation in React Router v6

  const handleGetStarted = () => {
    navigate('/details')
  }

  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <h1 className="home-logo">
          <FontAwesomeIcon icon={faApple} /> WATCH
        </h1>
      </header>

      {/* Main Content */}
      <main className="home-main">
        <h2 className="home-title">Apple Watch Studio</h2>
        <h1 className="home-subtitle">Choose a case.</h1>
        <h1 className="home-subtitle">Pick a band.</h1>
        <h1 className="home-subtitle">Create your own style.</h1>

        <button
          type="button"
          className="home-button"
          onClick={handleGetStarted}
        >
          Get started
        </button>

        {/* Watch Image */}
        <div className="home-watch">
          <img
            src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_SR_S10_VW_PF+watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=bTVPWG9LeURGUk1MeHRrSXdzZHJFek5MS0NHdU9pQ1oreFZMVHc2eWpaK0dWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM2lPQU12OHNybENqV2ZFcFd3bnFPMG91USs1b3UrbjRBN0I4YzZxZklZWjZNK3lsZE1HRkRZTjZSeEJXd0NXdmpoNzQyZmlkSVFmbjY5Y04rQ0tZTmFKSHU3NmZyQzBTVVZ5ZWlSanV5V2tOdkZ1emhkYWNycmJka1dOU01FKzNBcllyZWVpdkpPTHY3MlZadFg1My9uaUtQOUhDZ3lOdkpTWWtaMGxGM2FhSw"
            alt="image1"
            className="home-watch-image"
          />
        </div>
      </main>
    </div>
  )
}

export default Home
