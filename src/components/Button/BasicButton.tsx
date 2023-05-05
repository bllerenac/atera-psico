interface Props {
  className?: string,
  text: string,
  icon?: JSX.Element,
}

const BasicButton = ({ className = '', text, icon } : Props) => {
  return(
    <button className={`basic-button ${className}`} >
      {text}
      {icon}
    </button>
  )
}

export default BasicButton