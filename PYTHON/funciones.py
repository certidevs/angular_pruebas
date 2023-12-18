
# def para crear bloque de código reutilizable

#función sin/con parámetro y sin/con retorno

#RECOMENDACIÓN: CUANTO MENOS PARÁMETROS, MEJOR (MÁXIMO 3)

##IMPORT

def sumatorio(numeros):
    """calcula la suma de los números de una lista

    Args:
        numeros (list): lista de números int o float
    """
    sumatorio = 0
    for n in numeros:
        sumatorio += n
        
    return sumatorio


numeros = [1,2,3,4,5,6,7,8,9,10] 

resultado = sumatorio(numeros)
print(resultado) 


# Definir una lista de números
numeros = [1, 2, 3, 4, 5]

# Inicializar la variable para almacenar la suma
suma = 0

# Iterar sobre la lista y sumar los elementos
for numero in numeros:
    suma += numero

# Imprimir el resultado
print("El sumatorio es:", suma)

    