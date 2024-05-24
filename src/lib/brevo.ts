const NEWSLETTER_LIST_ID = 8

export async function createContact(name: string, email: string) {
  const url = 'https://api.brevo.com/v3/contacts/doubleOptinConfirmation'
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Api-Key': import.meta.env.BREVO_API_KEY
    },
    body: JSON.stringify({
      email,
      attributes: {
        nombre: name
      },
      includeListIds: [NEWSLETTER_LIST_ID],
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