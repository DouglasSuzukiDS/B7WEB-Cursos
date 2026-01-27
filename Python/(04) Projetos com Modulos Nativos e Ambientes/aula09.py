# Aula 09 - Trabalhando com valores aleatórios com random
import random

numero = random.randint(1, 10)
numero2 = random.uniform(1.5, 2.5)

print(numero2)

nomes = ['Nick', 'James', 'Tonhao', 'Mike', 'John', 'Jane']

print(random.choice(nomes)) # Escolhe um aleatoriamente
print(random.choices(nomes, k=2)) # Pode vir repetidos
print(random.sample(nomes, k=2)) # Não repete