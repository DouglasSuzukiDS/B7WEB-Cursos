import os
from dotenv import load_dotenv

load_dotenv()

import openai
import anthropic 
import xai_sdk
import google.generativeai as gai
import groq
import ollama

openai_client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
anthropic_client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))
xai_client = xai_sdk.Client(api_key=os.getenv("XAI_API_KEY"))
gai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
groq_client = groq.Groq(api_key=os.getenv("GROQ_API_KEY"))

print('Todo mundo configurado')