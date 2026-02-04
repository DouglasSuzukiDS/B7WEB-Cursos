import os 
import xai_sdk
from xai_sdk.chat import system, user, assistant

xai_client = xai_sdk.Client(api_key=os.getenv("XAI_API_KEY"))

def test():
   chat = xai_client.chat.create(model="grok-3-mini")
   chat.append(system('Seja direto e responda em uma frase.'))
   chat.append(assistant('Inclua o que seria Haki avançado.'))
   chat.append(user('Qual os 3 tipos de Haki em One Piece?'))

   response = chat.sample()

   return response