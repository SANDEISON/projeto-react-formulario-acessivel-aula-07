import { useState } from 'react'
import { FormField } from './FormField.jsx'
import { validateRegistration } from '../validation/validateRegistration.js'

const initialValues = {
  name: '',
  email: '',
  track: '',
  experience: 'beginner',
  terms: false,
}

export function RegistrationForm({ onValidSubmit }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  function handleChange(event) {
    const { name, type, value, checked } = event.target
    const nextValue = type === 'checkbox' ? checked : value

    setValues((current) => ({ ...current, [name]: nextValue }))
    setErrors((current) => ({ ...current, [name]: undefined }))
    setStatus('idle')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validateRegistration(values)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus('error')
      document.getElementById(Object.keys(nextErrors)[0])?.focus()
      return
    }

    onValidSubmit(values)
    setStatus('success')
  }

  function handleReset() {
    setValues(initialValues)
    setErrors({})
    setStatus('idle')
    onValidSubmit(null)
  }

  return (
    <section className="panel" aria-labelledby="form-title">
      <h2 id="form-title">Dados da inscrição</h2>
      <p id="required-note">Campos com * são obrigatórios.</p>

      <form onSubmit={handleSubmit} onReset={handleReset} noValidate>
        <FormField id="name" label="Nome completo *" error={errors.name}>
          {({ describedBy, invalid }) => (
            <input
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              aria-invalid={invalid}
              aria-describedby={describedBy || undefined}
              autoComplete="name"
            />
          )}
        </FormField>

        <FormField
          id="email"
          label="E-mail *"
          hint="Use um endereço que você consulta com frequência."
          error={errors.email}
        >
          {({ describedBy, invalid }) => (
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              aria-invalid={invalid}
              aria-describedby={describedBy || undefined}
              autoComplete="email"
            />
          )}
        </FormField>

        <FormField id="track" label="Trilha de interesse *" error={errors.track}>
          {({ describedBy, invalid }) => (
            <select
              id="track"
              name="track"
              value={values.track}
              onChange={handleChange}
              aria-invalid={invalid}
              aria-describedby={describedBy || undefined}
            >
              <option value="">Selecione uma trilha</option>
              <option value="components">Componentes</option>
              <option value="state">Estado</option>
              <option value="forms">Formulários</option>
            </select>
          )}
        </FormField>

        <fieldset>
          <legend>Experiência com React</legend>
          {[
            ['beginner', 'Estou começando'],
            ['intermediate', 'Já construí componentes'],
            ['advanced', 'Já publiquei aplicações'],
          ].map(([value, label]) => (
            <label className="choice" key={value}>
              <input
                type="radio"
                name="experience"
                value={value}
                checked={values.experience === value}
                onChange={handleChange}
              />
              {label}
            </label>
          ))}
        </fieldset>

        <div className="field checkbox-field">
          <label className="choice" htmlFor="terms">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              checked={values.terms}
              onChange={handleChange}
              aria-invalid={Boolean(errors.terms)}
              aria-describedby={errors.terms ? 'terms-error' : undefined}
            />
            Concordo com as regras de participação *
          </label>
          {errors.terms && <p id="terms-error" className="error" role="alert">{errors.terms}</p>}
        </div>

        <div className="actions">
          <button type="submit">Enviar inscrição</button>
          <button type="reset" className="secondary">Limpar</button>
        </div>

        <div className="status" aria-live="polite" aria-atomic="true">
          {status === 'error' && 'Revise os campos indicados antes de enviar.'}
          {status === 'success' && 'Inscrição validada e registrada nesta demonstração.'}
        </div>
      </form>
    </section>
  )
}

