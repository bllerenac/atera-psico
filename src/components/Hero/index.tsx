import './hero.scss'

interface Props {
  image: string
}

const BasicHero = ({ image } : Props) => {
  // alturas de imagen recomendada 1920px*650px 
  return(
    <div className="hero--container">
      <img src={image} alt="hero_image.png"/>
    </div>
  )
}

export default BasicHero