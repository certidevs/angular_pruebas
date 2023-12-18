usuario_correcto = "admin"
password_correcta = "1234"
usuario = input("Introduce el usuario: ")
password = input("Introduce la contraseña: ")

if usuario == usuario_correcto and password == password_correcta:
    print("Has entrado en el sistema")
else:
    print("Credenciales incorrectas")

es_estudiante = input("Eres estudiante? (Si/No): ").lower() == "si"
precio_total = float(input("Introduce el precio de compra:"))

if es_estudiante or precio_total > 100:
    precio_total = round(precio_total * 0.20, 2)
    print(f"tienes un dto: {precio_total}")
else:
    print(f"no tienes un dto: {precio_total}")

edad_usuario = int(input("Introduce tu edad: "))

if not edad_usuario >= 18:
    print("No puedes pasar")
else:
    print("Puedes pasar")
    
    edad_usuario = int(input("Introduce tu edad: "))
    
    if not edad_usuario >= 18:
        print("No puedes pasar")
    else:
        print("Puedes pasar")
        
email = input("Introduce tu email: ")
password = input("Introduce tu password: ")
if not email or not password:
    print("Los campos son obligatorios")
else:
    print("Todo correcto")
        
