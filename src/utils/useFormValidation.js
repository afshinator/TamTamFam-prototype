import React from "react"

function useFormValidation(initialState, validate, authenticate, t) {
  const [values, setValues] = React.useState(initialState)
  const [errors, setErrors] = React.useState({})
  const [isSubmitting, setSubmitting] = React.useState(false)

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0
      if (noErrors ) {
        authenticate()
        console.log("authenticated", values)
        setSubmitting(false)
      } else {
        console.log("errors trying to authenticate", errors)
        setSubmitting(false)
      }
    }
  }, [errors])

  function handleChange(event) {
    event.persist()
    setValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }))
  }

  function handleBlur(e) {
    const theInput = e.target.name
    const validationErrors = validate(values, t)
    console.log("~> ", e.target.name, validationErrors)

    // Only keep the error for the field user just blurred off of
    // const errsToKeep = {};
    // errsToKeep[theInput] = validationErrors[theInput]

    setErrors(validationErrors)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const validationErrors = validate(values, t)
    setErrors(validationErrors)
    setSubmitting(true)
    console.log({ values })
  }

  return {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    isSubmitting,
  }
}

export default useFormValidation
