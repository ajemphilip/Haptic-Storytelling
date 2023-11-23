const Button = (props) => {
return <button className="buttonClass"  onClick = {props.onClick}>{props.children + 1}</button>
}
export default Button