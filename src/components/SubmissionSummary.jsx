export function SubmissionSummary({ submission }) {
  return (
    <aside className="panel summary" aria-labelledby="summary-title">
      <h2 id="summary-title">Resultado do envio</h2>
      {!submission ? (
        <p>Nenhuma inscrição válida foi enviada.</p>
      ) : (
        <dl>
          <div><dt>Nome</dt><dd>{submission.name}</dd></div>
          <div><dt>E-mail</dt><dd>{submission.email}</dd></div>
          <div><dt>Trilha</dt><dd>{submission.track}</dd></div>
          <div><dt>Experiência</dt><dd>{submission.experience}</dd></div>
        </dl>
      )}

      <h3>Pontos para localizar</h3>
      <ul>
        <li><code>value</code>, <code>checked</code> e <code>onChange</code></li>
        <li><code>preventDefault()</code> no envio</li>
        <li>validação pura em arquivo separado</li>
        <li><code>label</code>, <code>fieldset</code> e <code>legend</code></li>
        <li><code>aria-invalid</code>, <code>aria-describedby</code> e <code>aria-live</code></li>
      </ul>
    </aside>
  )
}

