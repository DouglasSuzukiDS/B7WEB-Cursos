import os
import openai
from pydantic import BaseModel

openai_client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def test(): 
   response = openai_client.responses.create(
   model="gpt-5-nano",
   reasoning = {
      "effort": "low",
   },
   # input='Qual os 3 tipos de Haki em One Piece?'
   input=[
      {
         "role": "system",
         "content": [
            { "type": "input_text", "text": "Seja direto e conciso, uma única frase como resposta" }
         ]
      },
      {
         "role": "user",
         "content": [
            { "type": "input_text", "text": "Qual os 3 tipos de Haki em One Piece?" }
         ]
      }
   ])
   
   return response

class BookResponse(BaseModel):
   title: str
   author: str

def book_finder(search):
   response = openai_client.chat.completions.parse(
      model="gpt-5-nano",
      messages=[
         {"role": "system", "content": "Você é um guia de livro muito eficiaente."},
         {"role": "user", "content": f'Me dê as informações do livro com as seguintes características: {search}.Priorize em português se existir a versão em português.'}
      ],
      response_format=BookResponse
   )

   message = response.choices[0].message

   if message.parsed:
      return message.parsed
   else:
      return False