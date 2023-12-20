

def filtrar_precio(precios, precio_min, precio_max):
    precios_filtrados = []
    for precio in precios:
        if precio_min < precio < precio_max:
            precios_filtrados.append(precio)
    return precios_filtrados
precios = [10.99, 99.56, 53.23, 120.66, 32.44]
precios_filtrados = filtrar_precio(precios, 50, 155)
print(precios_filtrados)