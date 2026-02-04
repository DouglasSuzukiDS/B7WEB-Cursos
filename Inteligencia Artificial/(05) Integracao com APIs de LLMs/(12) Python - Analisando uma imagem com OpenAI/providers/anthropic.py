import os
import anthropic

anthropic_client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

def test():
   response = anthropic_client.messages.create(
      model="claude-3-7-sonnet-latest",
      max_tokens=1024,
      system="Seja direto e responda em uma única frase",
      messages=[
         { "role": "user", "content": 'Qual os 3 tipos de Haki em One Piece?' }
      ],
   )

   message = response.content[0].text
    
   return message