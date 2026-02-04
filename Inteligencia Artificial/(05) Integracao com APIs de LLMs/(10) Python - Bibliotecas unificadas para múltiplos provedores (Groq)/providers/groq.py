import os
import groq

groq_client = groq.Groq(api_key=os.getenv("GROQ_API_KEY"))

def test():
   response = groq_client.chat.completions.create(
      model="llama-3.3-70b-versatile",
      messages=[
         {"role": "system", "content": "Seja direto e responda em uma frase."},
         {"role": "user", "content": "Quais são os 3 tipos de Haki em One Piece?"},
         {"role": "assistant", "content": "Os 3 tipos de Haki em One Piece são: Haki da Observação, Haki do Armamento e Haki do Rei."},
         {"role": "user", "content": "Qual é o mais poderoso?"}
      ]
   )

   return response.choices[0].message.content