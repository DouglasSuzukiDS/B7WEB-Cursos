# Aula 13 - Salvando e lendo dados estruturados com json
import json

# json.dump() => Escrever dados em JSON
# json.dumps() => Converter JSON em string
# json.load() => Ler dados em JSON
# json.loads() => Converter em JSON

dados = {
   'nome': 'Nick',
   'idade': 20,
   'cursos': ['PHP', 'REACT', 'PYTHON', 'IA']
}

with open('pessoa.json', 'w') as file:
   json.dump(dados, file, indent=2, ensure_ascii=False) # Escrever

with open('pessoa.json', 'r') as file:
   dados2 = json.load(file) # Ler

print(dados2['nome'])

for curso in dados2['cursos']: 
   print(curso)

dados3 = '{ "nome": "Mike", "idade": 21 }'
pessoa = json.loads(dados3) # Converter para JSON 

print(pessoa['nome'])

conteudo = json.dumps(dados, indent=2) # Converter para string JSON
print(conteudo)