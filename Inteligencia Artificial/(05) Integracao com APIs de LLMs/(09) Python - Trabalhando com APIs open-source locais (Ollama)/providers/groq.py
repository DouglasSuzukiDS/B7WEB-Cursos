import os
import groq

groq_client = groq.Groq(api_key=os.getenv("GROQ_API_KEY"))