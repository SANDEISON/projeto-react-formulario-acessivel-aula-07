import { useState } from 'react'
import { RegistrationForm } from './components/RegistrationForm.jsx'
import { SubmissionSummary } from './components/SubmissionSummary.jsx'

export default function App() {
  const [lastSubmission, setLastSubmission] = useState(null)

  return (
    <main className="page-shell">
      <header className="hero">
        <p className="eyebrow">Front-End Frameworks · Aula 07</p>
        <h1>Inscrição na oficina de React</h1>
        <p>
          Um formulário controlado com validação no envio, mensagens claras e
          recursos básicos de acessibilidade.
        </p>
      </header>

      <div className="lesson-grid">
        <RegistrationForm onValidSubmit={setLastSubmission} />
        <SubmissionSummary submission={lastSubmission} />
      </div>
    </main>
  )
}

