// Gemini image generation (requires billing enabled on Google AI Studio)
// Currently using Pollinations.ai as free alternative
// To switch to Gemini: enable billing at https://ai.dev/projects
const GEMINI_API_KEY = 'AIzaSyDoZY9cVAyMlxPt1j52Zl9QzcV4r0RH19I'
const GEMINI_IMAGE_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${GEMINI_API_KEY}`

async function tryGemini(prompt) {
  const res = await fetch(GEMINI_IMAGE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseModalities: ['IMAGE', 'TEXT'] }
    })
  })
  if (!res.ok) {
    const e = await res.json().catch(() => ({}))
    throw new Error(e?.error?.message || `Gemini HTTP ${res.status}`)
  }
  const data = await res.json()
  const parts = data?.candidates?.[0]?.content?.parts || []
  const imgPart = parts.find(p => p.inlineData)
  if (!imgPart) throw new Error('Gemini: зураг олдсонгүй')
  return `data:${imgPart.inlineData.mimeType};base64,${imgPart.inlineData.data}`
}

// Pollinations.ai — free, no API key needed, AI image generation
function pollinationsUrl(prompt, seed) {
  const encoded = encodeURIComponent(prompt)
  return `https://image.pollinations.ai/prompt/${encoded}?width=800&height=500&seed=${seed}&model=flux&nologo=true`
}

export async function generateImage(prompt, seed = Math.floor(Math.random() * 99999)) {
  // Try Gemini first (works when billing is enabled)
  try {
    return await tryGemini(prompt)
  } catch {
    // Fall back to Pollinations.ai (free, always available)
    return pollinationsUrl(prompt, seed)
  }
}
