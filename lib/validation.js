// TODO: Validate this form

// SELECT THE ELEMENTS
const allInputs = document.querySelectorAll('.form-control') // THIS IS A NODELIST
const arrayOfInputs = Array.from(allInputs)                  // THIS IS AN ARRAY
const submitButton = document.querySelector('button')
const checkboxHtmlElement = document.querySelector('#tos')

// ADD BOOTSTRAP CLASSES IF INPUT IS NOT EMPTY
const addValidationClasses = (input) => {
  if (input.value !== '') {
    // add the class 'is-valid'
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
  } else {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
  }
}

// CHECK IF CHECKBOX IS CHECKED
const checkboxChecked = (input) => {
  return input.checked
}

// CHECK IF ALL INPUTS ARE FILLED
const allFilled = (inputs) => {
  const isValid = inputs.every((input) => {
    return input.classList.contains('is-valid')
  })
  return isValid
}

const enableButton = () => {
  // 1. is every input valid? -> all inouts have the is-valid class
  const allInputsAreValid = allFilled(arrayOfInputs)
  // console.log(`all inputs are valid? ${allInputsAreValid}`)
  // 2. checkbox is checked
  const checkboxIsChecked = checkboxChecked(checkboxHtmlElement)
  // console.log(`checkbox is checked? ${checkboxIsChecked}`)
  if (allInputsAreValid && checkboxIsChecked) {
    // enable the button
    submitButton.disabled = false
  } else {
    // disable the button
    submitButton.disabled = true
  }
}

allInputs.forEach((input) => {
  input.addEventListener('blur', () => {
    // console.log('EVENT HAPPENED!')
    // check if the input is valid
    // if its valid
    // add the class 'is-invalid' OR 'is-valid
    addValidationClasses(input)
    // Check if we can enable the button or not
    enableButton()
  })
})

checkboxHtmlElement.addEventListener('click', () => {
  enableButton()
})
