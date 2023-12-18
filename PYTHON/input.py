
# Input lee lo que escribimos por teclado y lo guarda en una variable

nombre=input ('Por favor, introduce tu nombre:')
print('Hola', nombre)

edad=input ('Por favor, introduce tu edad:')
print('Tu edad es', edad)

edad_num=int(edad)
print(edad_num + 1)

estado_civil=input ('Por favor, introduce tu estado civil:')
print('Tu estado civil es', estado_civil)

# leer peso con decimales float()
peso = input('Introduce tu peso: ')
peso_num = float(peso)
print(peso_num - 5)

# leer si está de alta (ejemplo) True o False no bool()

print(bool()) # False
print(bool(0)) # False
print(bool(1)) # True siempre que haya un caracter dentro es True
emails=['u1@gmail.com','u2@gmail.com']
print(bool(emails)) # True
mensajes=[] #lista vacia
print(bool(mensajes)) # False

input('Introduce si estás dado de alta:')
print(bool(input)) # True