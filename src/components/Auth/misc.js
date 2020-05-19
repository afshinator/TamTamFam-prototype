import React from "react"
import { Link } from "react-router-dom"

export const PW_MIN_LENGTH = 6

export const ERROR = "text-xs font-bold text-intlOrange"
const PLACEHOLDER = <p className={`${ERROR} opacity-0`}>_</p>

export const CardTitle = (props) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl">{props.title}</h2>
      <p className="text-sm ">{props.children}</p>
    </div>
  )
}

export const LinkTo = (props) => {
  return (
    <Link
      className="text-sm text-rifleGreen underline-none hover:text-bistre"
      to={props.to}
    >
      {props.text}
    </Link>
  )
}

export const InputBox = (props) => {
  const name = props.name ? props.name : props.field
  const [hasFocus, setFocus] = React.useState(false)
  const classes = `${
    hasFocus ? "border-intlOrange" : "border-transparent"
  } box-content border-2 flex items-center mt-4 bg-ivory`

  return (
    <>
      <span className={classes}>
        <img src={props.src} className="opacity-25 " alt={props.alt} />
        <input
          className={"w-full p-2"}
          onFocus={() => {
            setFocus(true)
          }}
          onChange={props.handleChange}
          onBlur={(e) => {
            props.handleBlur(e)
            setFocus(false)
          }}
          value={props.values[props.field]}
          type={props.field}
          name={name}
          placeholder={props.placeholder}
          disabled={props.disabled}
        />
      </span>
      <span>
        {props.errors[name] ? (
          <p className={ERROR}>{props.errors[name]}</p>
        ) : (
          PLACEHOLDER
        )}
      </span>
    </>
  )
}

export const SubmitButton = (props) => {
  const classes = `${
    props.readyToSubmit
      ? "bg-sandyBrown hover:bg-outOrange"
      : "cursor-not-allowed bg-manatee"
  } px-4 py-2 text-white`

  return (
    <button className={classes} disabled={!props.readyToSubmit} type="submit">
      {props.txt}
    </button>
  )
}
