import React from 'react'

function Form(props) {

  const { contactForm, fullName, email, phone, textArea, handleChange, handleSubmit } = props;

  const classesForm = ['form'];
  if (contactForm) {
    classesForm.push('form--onPosition');
  }

  const classesLabelForFullName = ['form__label'];
  if (fullName) classesLabelForFullName.push('form__label--filled')

  const classesLabelForEmail = ['form__label'];
  if (email) classesLabelForEmail.push('form__label--filled')

  const classesLabelForPhone = ['form__label'];
  if (phone) classesLabelForPhone.push('form__label--filled')

  const classesLabelForMessage = ['form__label'];
  if (textArea) classesLabelForMessage.push('form__label--filled')

  return (
    <form className={classesForm.join(' ')}>
      <label className={classesLabelForFullName.join(' ')} htmlFor="Name">Full Name*
        <input className='form__input' name='fullName' type="text" value={fullName} onChange={handleChange} autoComplete="off" required />
      </label>

      <label className={classesLabelForEmail.join(' ')} htmlFor="">Email Adress*
          <input className='form__input' name='email' type="email" value={email} onChange={handleChange} autoComplete="off" required />
      </label>

      <label className={classesLabelForPhone.join(' ')} htmlFor="">Phone
          <input className='form__input' name='phone' type='number' value={phone} onChange={handleChange} autoComplete="off" />
      </label>

      <label className={classesLabelForMessage.join(' ')} htmlFor="">What Can I do for You*?
          <textarea className='form__textArea' name='textArea' type='text' value={textArea} onChange={handleChange} autoComplete="off" required></textarea>
      </label>
      <div className='form__btnContainer'>
        <input type='button' value='Send' onClick={handleSubmit} className='form__btn' />
        <button className="form__btnCopy"></button>
        <button className="form__btnCopy2"></button>
      </div>
    </form>
  )
}

export default Form
