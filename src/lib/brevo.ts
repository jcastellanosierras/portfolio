export async function createContact(email: string, listId: number, name?: string) {
  const url = 'https://api.brevo.com/v3/contacts/doubleOptinConfirmation'
  
  const attributes = {}

  if (name) {
    Object.assign(attributes, { nombre: name })
  }

  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Api-Key': import.meta.env.BREVO_API_KEY
    },
    body: JSON.stringify({
      email,
      attributes,
      includeListIds: [listId],
      templateId: 1,
      redirectionUrl: import.meta.env.PROD
        ? `${import.meta.env.SERVER_URL}/bienvenido`
        : 'http://localhost:4321/bienvenido'
    })
  }

  const res = await fetch(url, options)

  if (!res.ok) {
    throw new Error('Failed to create contact')
  }
}