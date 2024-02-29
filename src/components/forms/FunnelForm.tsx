import { useForm, ValidationError } from "@formspree/react"
import { useEffect, useState } from "react"

const FunnelForm = ({ formId }: { formId: string }) => {
  const [state, handleSubmit] = useForm(formId)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setSubmitted(Boolean(window.localStorage.getItem('funnel-form-submitted')))
  }, [])

  if (state.succeeded || submitted) {
    window.localStorage.setItem('funnel-form-submitted', 'true')
    return <p id="thanks">Gracias por participar!</p>
  }

  return (
    <form
      onSubmit={handleSubmit}  
    >
      <div className="question-container">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>

      <div className="question-container">
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" id="name" required />
        <ValidationError 
          prefix="Nombre" 
          field="name"
          errors={state.errors}
        />
      </div>

      <div className="question-container">
        <label htmlFor="discord-username">Usuario de Discord</label>
        <input type="text" name="discord-username" id="discord-username" required />
        <ValidationError 
          prefix="Usuario de Discord" 
          field="discord-username"
          errors={state.errors}
        />
      </div>

      <div className="question-container">
        <label htmlFor="project">¿Cuál es tu nicho o proyecto?</label>
        <textarea name="project" id="project" required />
        <ValidationError 
          prefix="¿Cuál es tu nicho o proyecto?" 
          field="project"
          errors={state.errors}
        />
      </div>

      <div className="question-container">
        <label htmlFor="project-state">¿En qué punto se encuentra tu proyecto?</label>
        <textarea name="project-state" id="project-state" required />
        <ValidationError 
          prefix="¿En qué punto se encuentra tu proyecto?" 
          field="project-state"
          errors={state.errors}
        />
      </div>

      <div className="question-container">
        <label htmlFor="product-to-promote">¿Qué servicio o producto quieres promocionar?</label>
        <textarea name="product-to-promote" id="product-to-promote" required />
        <ValidationError 
          prefix="¿Qué servicio o producto quieres promocionar?" 
          field="product-to-promote"
          errors={state.errors}
        />
      </div>

      <div className="question-container">
        <label htmlFor="public">¿A qué público te diriges?</label>
        <textarea name="public" id="public" required />
        <ValidationError 
          prefix="¿A qué público te diriges?" 
          field="public"
          errors={state.errors}
        />
      </div>

      <div className="question-container">
        <label htmlFor="show-face">¿Estás dispuesto a enseñar la cara en anuncios?</label>
        <select name="show-face" id="show-face" required>
          <option value="yes">Sí</option>
          <option value="no">No</option>
        </select>
        <ValidationError 
          prefix="¿Estás dispuesto a enseñar la cara en anuncios?" 
          field="show-face"
          errors={state.errors}
        />
      </div>

      <div className="question-container">
        <label htmlFor="qty-to-invest">¿Cuándo dinero estás dispuesto a invertir en anuncios?</label>
        <input type="number" name="qty-to-invest" id="qty-to-invest" required />
        <ValidationError 
          prefix="¿Cuándo dinero estás dispuesto a invertir en anuncios?" 
          field="qty-to-invest"
          errors={state.errors}
        />
      </div>

      <div className="question-container">
        <label htmlFor="reason">¿Por qué deberías ser seleccionado?</label>
        <textarea name="reason" id="reason" required></textarea>
        <ValidationError 
          prefix="¿Por qué deberías ser seleccionado?" 
          field="reason"
          errors={state.errors}
        />
      </div>

      <button disabled={state.submitting}>Enviar</button>
    </form>
  )
}

export default FunnelForm