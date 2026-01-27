# Aula 04 - Projeto 01 - Organizador de arquivos automático - Parte 02
import os

folder = 'downloads'
file_types = {
   'images': ['.jpg', '.jpeg', '.png', '.gif'],
   'docs': ['.txt', '.csv','.doc', '.pdf', '.xlsx'],
   'videos': ['.mp4', '.mov'],
   'softwares': ['.zip', '.exe', '.dmg', '.pkg'],
   'others': []
}

def folder_to_move(file):
   # Separa o arquivo por NAME EXTENSION (Tupla)
   ext = os.path.splitext(file)[1] # Pega a extensão
   
   for folder_name in file_types:
      if ext in file_types[folder_name]:
         # print(file_types[folder_name])
         for allowed_extension in file_types[folder_name]:
            # print(allowed_extension)
            if allowed_extension == ext:
               return folder_name

   return 'others'

for folder_name in file_types:
   # Se não existir, cria as pastas
   if os.path.exists(os.path.join(folder, folder_name)) == False:
      os.mkdir(os.path.join(folder, folder_name))

list = os.listdir(folder)

for file in list:
   origin_path = os.path.join(folder, file)
   if os.path.isfile(origin_path):
      destiny_folder = folder_to_move(file)
      # print(destiny_folder)
      destiny_path = os.path.join(folder, destiny_folder, file)

      os.rename(origin_path, destiny_path)