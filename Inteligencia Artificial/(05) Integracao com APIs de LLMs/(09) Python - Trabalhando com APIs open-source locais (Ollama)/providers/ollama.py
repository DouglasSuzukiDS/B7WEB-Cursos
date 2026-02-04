import os 
import ollama

# IA que da acesso a modelos open source rodando localmente

# Utiliza recursos da sua máquina

# https://ollama.com/download => necessário baixar o software
   # ollama -v => Comando para verificar se ollama está instalado
   # ollama list => Comando para verificar se o modelo está instalado
   # https://ollama.com/library/llama3.1 => Link para baixar o modelo
      # ollama run llama3.1 => Comando baixar o modelo


def test():
   response = ollama.chat(
      model="llama3.1", 
      messages=[
         {"role": "system", "content": "Seja direto e responda em uma frase."},
         {"role": "user", "content": "Qual os 3 tipos de Haki em One Piece?"},
         {"role": "assistant", "content": "Inclua o que seria Haki avançado."} 
      ]
   )

   return response['message']['content']

def test2():
   response = ollama.generate(
      model="llama3.1", 
      system="Seja direto e responda em uma frase.",
      prompt="Qual os 3 tipos de Haki em One Piece?"
   )

   return response['response']