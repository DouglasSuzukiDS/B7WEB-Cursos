# Aula 03 - Projeto 01 - Organizador de arquivos automático - Parte 01
import os

folder = 'downloads'
file_types = {
   'images': ['.jpg', '.jpeg', '.png', '.gif'],
   'docs': ['.txt', '.csv','.doc', '.pdf', '.xlsx'],
   'videos': ['.mp4', '.mov'],
   'softwares': ['.zip', '.exe', '.dmg', '.pkg'],
   'others': []
}

for folder_name in file_types:
   # Se não existir, cria as pastas
   if os.path.exists(os.path.join(folder, folder_name)) == False:
      os.mkdir(os.path.join(folder, folder_name))

