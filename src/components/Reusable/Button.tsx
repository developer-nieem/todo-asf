
const Button = ({text , onClick , type , btnStyle = ""}) => {
  return (
    <>
       <button type={type} onClick={onClick}  className={`btn btn-primary ${btnStyle}`}>{text} </button>
    </>
  )
}

export default Button
