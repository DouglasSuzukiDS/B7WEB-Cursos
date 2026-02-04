import os
from dotenv import load_dotenv

load_dotenv()

# from providers import openai
from providers import anthropic
# from providers import xai_sdk
# from providers import google as gai
# from providers import groq
# from providers import ollama

# print(openai.test())
print(anthropic.test())