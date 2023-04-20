from connection import Connection


class Users:


    def __init__(self, id, username, pswd, name, occupation, birthday, points, task_comp):
        self.__id = id
        self.__username = username
        self.__pswd = pswd
        self.__name = name
        self.__occupation = occupation
        self.__birthday = birthday
        self.__points = points
        self.__task_comp = task_comp

    def set_id(self, id):
        self.__id = id

    def set_username(self, username):
        self.__username = username

    def set_pswd(self, pswd):
        self.__pswd = pswd

    def set_name(self, name):
        self.__name = name

    def set_occupation(self, occupation):
        self.__occupation = occupation

    def set_birthday(self, birthday):
        self.__birthday = birthday

    def set_points(self, points):
        self.__points = points

    def set_task_comp(self, task_comp):
        self.__task_comp = task_comp

    def get_id(self):
        return self.__id

    def get_username(self):
        return self.__username

    def get_pswd(self):
        return self.__pswd

    def get_name(self):
        return self.__name

    def get_occupation(self):
        return self.__occupation 

    def get_birthday(self):
        return self.__birthday

    def get_points(self):
        return self.__points

    def get_task_comp(self):
        return self.__task_comp
    

    def save(self, user, pwd):
        connection = Connection("localhost", user, pwd, "sidequests")
        sql = "select identification from Users;"
        values = ''
        result = connection.run_select(sql, value)
        for index in range(0, len(result)-1):
            cleaned.append(result[index][0])

        # test if not in table
        if self.get_id() not in cleaned:
            # add to tuple table
            sql = "insert into sidequests.Users(identification, username, password, name, occupation, birthday, points, completed_tasks) values (%s, %s, %s, %s, %s, %s, %s, %s)"
            values = (self.get_id(), self.get_username(), self.get_pswd(), self.get_name(), self.get_occupation(), self.get_birthday(), self.get_points(), self.get_task_comp())
            connection.run_change(sql, values)
        else:
            # update tuple table
            sql = "update sidequests.Users set password = %s, name = %s, occupation = %s, birthday = %s, points = %s, completed_tasks = %s where username = %s"
            values = (]self.get_pswd(), self.get_name(), self.get_occupation(), self.get_birthday(), self.get_points(), self.get_task_comp(), self.get_username())
            connection.run_change(sql, values)
    
    def remove(self, user, pwd):
        # connect to the databse
        connection = Connection("localhost", user, pwd, "sidequests")

        # delete Pilot from Database
        sql = "delete from Users where username = %s"
        values = (self.get_username(),)
        result = connection.run_change(sql, values)

    def load(self, username, user, pwd):
        # connect to the databse
        connection = Connection("localhost", user, pwd, "sidequests")

        # get the values for the given ID
        sql = "select * from Users where username = %s"
        values = (username,)
        result = connection.run_select(sql, values)

        # Set all values grabbed from the database
        self.set_id(result[0][0])
        self.set_username(result[0][1])
        self.set_pswd(result[0][2])
        self.set_occupation(result[0][3])
        self.set_birthday(result[0][4])
        self.set_points(result[0][5])
        self.set_task_comp(result[0][6])