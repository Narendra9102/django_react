import mysql.connector
mydb = mysql.connector.connect(host="localhost",
                               user="root",
                               passwd="Narendra@9102",
                               auth_plugin="mysql_native_password",
                               database = "narendra" )

mycursor = mydb.cursor()
#mycursor.execute("desc newuser")
#mycursor.execute("delete from newuser where id = 5")
mycursor.execute("select * from newuser")
#mydb.commit()

for db in mycursor:
    print(db)

