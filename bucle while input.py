
pasword_correct = 'admin'
password = ''

while password != pasword_correct:
    print('Contraseña incorrecta')
    password = input('Introduce la contraseña de nuevo: ')
    
print('Contraseña correcta')

departamentos = ['Ventas', 'Compras', 'Informática', 'Administración']
departamento = ''

while departamento not in departamentos:
    departamento = input('Introduce el departamento: ')
    if departamento not in departamentos:
        
      print('El departamento no existe')
      

