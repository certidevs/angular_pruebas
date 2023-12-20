

def contar_vocales (texto):
    vocales = "aeiouAEIOUáéíóúÁEÍÓÚ"
    contador = 0
    for letra in texto:
        if letra in vocales:
            contador += 1
    return contador
print(contar_vocales(" La reforma de la asistencia social de Clinton de 1996 creó una asignación especial para financiar programas de promoción del matrimonio. Destinó millones de dólares a los Estados capaces de reducir la tasa de aborto y a la vez los nacimientos de hijos ilegítimos"))