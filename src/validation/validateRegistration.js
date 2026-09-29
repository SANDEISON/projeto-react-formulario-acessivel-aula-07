export function validateRegistration(values) {
  const errors = {}

  if (values.name.trim().length < 3) {
    errors.name = 'Informe um nome com pelo menos 3 caracteres.'
  }

  if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Informe um e-mail válido, como nome@dominio.com.'
  }

  if (!values.track) {
    errors.track = 'Selecione uma trilha de interesse.'
  }

  if (!values.terms) {
    errors.terms = 'Você precisa aceitar as regras para continuar.'
  }

  return errors
}

