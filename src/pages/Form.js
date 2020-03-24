import React from 'react'

function Form(props) {

  const { contactForm, fullName, email, phone, textArea, handleChange, handleSubmit } = props;

  return (
    <form className={contactForm ? 'form form--onPosition' : 'form'}>
      <label className={fullName ? 'form__label form__label--filled' : 'form__label'} htmlFor="Name">Full Name*
        <input className='form__input' name='fullName' type="text" value={fullName} onChange={handleChange} autoComplete="off" required />
      </label>

      <label className={email ? 'form__label form__label--filled' : 'form__label'} htmlFor="">Email Adress*
          <input className='form__input' name='email' type="email" value={email} onChange={handleChange} autoComplete="off" required />
      </label>

      <label className={phone ? 'form__label form__label--filled' : 'form__label'} htmlFor="">Phone
          <input className='form__input' name='phone' type='number' value={phone} onChange={handleChange} autoComplete="off" />
      </label>

      <label className={textArea ? 'form__label form__label--filled' : 'form__label'} htmlFor="">What Can I do for You*?
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
