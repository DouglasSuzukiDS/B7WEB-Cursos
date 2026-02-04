import os
from dotenv import load_dotenv

load_dotenv()

from providers import openai
# from providers import anthropic
# from providers import xai_sdk
# from providers import google as genai
# from providers import groq
# from providers import ollama

# print(openai.test())
# print(anthropic.test())
# print(xai_sdk.test())
# print(genai.test())
# print(ollama.test())
# print(groq.test())

book = openai.book_finder("Título: O livro menciona 42 como o sendito da vida.")

if book:
   print(f'Título: {book.title}')
   print(f'Autor: {book.author}')
else:
   print("Nenhum livro encontrado com essas características.")