
# is
#none valor vacio
#is not

print(1== True) #True
print(0==True) #False


email = None
user_email = input("Introduce tu correo: ")

if user_email.endswith("@gmail.com"):
    email= user_email

if email is None:
    print("El correo no es correcto")
    
if email is not None:
        print("El correo es correcto")