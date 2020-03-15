import React from 'react'

function Form(props) {

  const classesForm = ['form'];
  if (props.contactForm) {
    classesForm.push('form--onPosition');
  }

  return (
    <form className={classesForm.join(' ')}>
      <label className='form__label' htmlFor="Name">Full Name*
        <input className='form__input' name='fullName' type="text" value={props.fullName} onChange={props.handleChange} required />
      </label>

      <label className='form__label' htmlFor="">Email Adress*
          <input className='form__input' name='email' type="email" value={props.email} onChange={props.handleChange} required />
      </label>

      <label className='form__label' htmlFor="">Phone
          <input className='form__input' name='phone' type='number' value={props.phone} onChange={props.handleChange} />
      </label>

      <label className='form__label' htmlFor="">What Can I do for You*?
          <textarea className='form__textArea' name='textArea' type='text' value={props.textArea} onChange={props.handleChange} required></textarea>
      </label>
      <div className='form__btnContainer'>
        <input type='button' value='submit' onClick={props.handleSubmit} className='form__btn' />
        <button className="form__btnCopy"></button>
        <button className="form__btnCopy2"></button>
      </div>
    </form>
  )
}

export default Form
