import os
from google import genai

client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))

def test():
   response = client.models.generate_content(
      model = "gemini-2.5-flash",  
      config=genai.types.GenerateContentConfig(
         system_instruction= "Seja direto e responda em uma frase."
      ),
      contents = 'Quais os 3 tipos de Haki em One Piece?',
   )

   return response.text