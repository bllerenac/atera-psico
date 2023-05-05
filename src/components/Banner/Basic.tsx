import './banner.scss'

interface Props {
  title: string,
  text: string,
  image?: string,
  bgImage?: string,
  button?: string,
  fullWidth?: true | false,
  className?: string
}

// background image recommended 1920*300px in full Width or 1440*300px in section Width

const BasicBanner = ({ title, text, image, bgImage, button, className = '', fullWidth = true } : Props) => {
  return(
    <div className={`banner-basic--container ${className} ${fullWidth ? '':'section'}`}>
      <div className={bgImage ? 'bg-image':'hidden'}>
        <img src={bgImage} alt='banner_image.png'/>
      </div>

      <div className='banner-basic-content'>
        <div className='text'>
          <h2>{title}</h2>
          <p>{text}</p>
          {button ?
            <div className='button-container'>
            </div>:
            <></>
          }
        </div>

        <div className={`image-container ${image ? '':'hidden'}`}>
          <img src={image} alt='banner_image.png'/>
        </div>
      </div>
    </div>
  )
}

export default BasicBanner