// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => {
  console.log('in home')
  return (
    <div>
      <Header />
      <div>
        <div>
          <h1>Clothes That Get You Noticed</h1>
          <p>
            Fashion is part of the daily air dbsdudbs buvb suufv ffs c uc sc
          </p>
          <button type="button">shop Now</button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  )
}
export default Home
