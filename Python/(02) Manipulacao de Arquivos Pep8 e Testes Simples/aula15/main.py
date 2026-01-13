# Aula 15 - Oque s'ao testes automatizados e porque usá-los

# Teste unitário
# Teste de integração
# Teste de sistema / end-to-end / e2e

from utils import somar

assert somar(10, 5) == 15
assert somar(1, 1) == 2
assert somar(-5, 5) == 0