'use server'

export async function submitContactForm(formData: FormData) {
  const data = {
    naam: formData.get('naam'),
    email: formData.get('email'),
    onderwerp: formData.get('onderwerp'),
    bericht: formData.get('bericht'),
  }

  try {
    const response = await fetch('https://usebasin.com/f/1f4650e9075c', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Basin error:', response.status, errorText)
      return { success: false, error: `Status ${response.status}` }
    }

    return { success: true }
  } catch (error) {
    console.error('Contact form error:', error)
    return { success: false, error: 'Network error' }
  }
}
