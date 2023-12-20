
#funciones para leer por consola con input
def input_int(prompt):
    while True:
        try:
            resultado = int(input(prompt))
            return resultado
        except Exception:
            print("Error: Ingrese un numero entero")
            return input_int(prompt)
 

edad = input_int("Ingrese su edad: ")
print(f'Tu edad es {edad}')

#se puede usar el try except para cualquier tipo de dato
#si se quiere que el programa continue, se puede usar un while true
#y un return para que vuelva a ejecutar la funcion

#con float,con bool, con string, split, etc



def read_float(prompt):
    while True:
        try:
            resultado = float(input(prompt))
            return resultado
        except Exception:
            print("Error: Ingrese un numero")
            return read_float(prompt)
                
def read_bool(prompt):
    while True:
        pass
