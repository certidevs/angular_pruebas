texto = 'hola mundo Angular'

longitud = len(texto)
print(longitud)

# Convertir a mayusculas (upper)
print(texto.upper())

# Convertir a minusculas (lower)
print(texto.lower())

# Partir un texto (split) genera una lista de strings
print(texto.split())
print(len(texto.split()))

# reemplazar un texto (replace)
print(texto.replace('hola', 'adios'))



precio_producto = "53.99 dólares"

# paso 1: split()
precio_elementos = precio_producto.split()
print(precio_elementos[0]) # 53.99 en texto

# paso 2: convertir texto a número float()
precio_num = float(precio_elementos[0])
print(precio_num) # 53.99 en número

# paso 3: + 5
precio_num = precio_num + 5
print(precio_num) # 58.99 en número

# format para dar formato a un string

descripcion_producto= """
El producto textil {nombre_producto} tiene un precio de {precio_producto} euros.
"""
print(descripcion_producto.format(nombre_producto='camiseta', precio_producto=15.99))
print(descripcion_producto.format(nombre_producto='pantalon', precio_producto=25.99))
print(descripcion_producto.format(nombre_producto='calcetines', precio_producto=5.99))