import React from 'react'

function Form(props) {

  const classesForm = ['form'];
  if (props.contactForm) {
    classesForm.push('form--onPosition');
  }

  const classesLabelForFullName = ['form__label'];
  if (props.fullName) classesLabelForFullName.push('form__label--filled')

  const classesLabelForEmail = ['form__label'];
  if (props.email) classesLabelForEmail.push('form__label--filled')

  const classesLabelForPhone = ['form__label'];
  if (props.phone) classesLabelForPhone.push('form__label--filled')

  const classesLabelForMessage = ['form__label'];
  if (props.textArea) classesLabelForMessage.push('form__label--filled')

  return (
    <form className={classesForm.join(' ')}>
      <label className={classesLabelForFullName.join(' ')} htmlFor="Name">Full Name*
        <input className='form__input' name='fullName' type="text" value={props.fullName} onChange={props.handleChange} autoComplete="off" required />
      </label>

      <label className={classesLabelForEmail.join(' ')} htmlFor="">Email Adress*
          <input className='form__input' name='email' type="email" value={props.email} onChange={props.handleChange} autoComplete="off" required />
      </label>

      <label className={classesLabelForPhone.join(' ')} htmlFor="">Phone
          <input className='form__input' name='phone' type='number' value={props.phone} onChange={props.handleChange} autoComplete="off" />
      </label>

      <label className={classesLabelForMessage.join(' ')} htmlFor="">What Can I do for You*?
          <textarea className='form__textArea' name='textArea' type='text' value={props.textArea} onChange={props.handleChange} autoComplete="off" required></textarea>
      </label>
      <div className='form__btnContainer'>
        <input type='button' value='Send' onClick={props.handleSubmit} className='form__btn' />
        <button className="form__btnCopy"></button>
        <button className="form__btnCopy2"></button>
      </div>
    </form>
  )
}

export default Form
