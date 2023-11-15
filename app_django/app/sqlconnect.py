import mysql.connector
mydb = mysql.connector.connect(host="localhost",
                               user="root",
                               passwd="Narendra@9102",
                               auth_plugin="mysql_native_password",
                               database = "narendra" )

mycursor = mydb.cursor()
mycursor.execute("select * from app_customer")

for db in mycursor:
    print(db)

