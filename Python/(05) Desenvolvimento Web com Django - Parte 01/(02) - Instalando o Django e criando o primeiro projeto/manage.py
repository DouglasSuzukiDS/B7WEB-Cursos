# Aula 02 - Instalando o Django e criando o primeiro projeto

# py -m venv venv => Cria um ambiente virtual
# venv\Scripts\activate => Ativa o ambiente virtual
# pip install django => Instala o Django
# pip freeze > requirements.txt => Cria arquivos com as dependencias

# django-admin --version => Verifica a versão do Django
# django-admin startproject core . => Cria um projeto Django
# py manage.py runserver => Roda o servidor 

#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys

def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
