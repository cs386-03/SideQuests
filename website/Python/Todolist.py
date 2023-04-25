from connection import Connection

class Todolist:


    def __init__(self, event_id, user_id, event_name, event_date, priority):
        self.__event_id = event_id
        self.__user_id = user_id
        self.__event_name = event_name
        self.__event_date = event_date
        self.__priority = priority

    
    def set_user_id(self, user_id):
        self.__user_id = user_id

    def set_event_id(self, event_id):
        self.__event_id = event_id

    def set_event_name(self, event_name):
        self.__event_name = event_name

    def set_event_date(self, event_date):
        self.__event_date = event_date

    def set_priority(self, priority):
        self.__priority = priority

    def get_user_id(self):
        return self.__user_id
    
    def get_event_id(self):
        return self.__event_id
    
    def get_event_name(self):
        return self.__event_name
    
    def get_event_date(self):
        return self.__event_date
    
    def get_priority(self):
        return self.__priority
    
    def save(self, user, pwd):
        connection = Connection("localhost", user, pwd, "sidequests")
        sql = "select Event_ID from Todolist;"
        values = ''
        cleaned = []
        result = connection.run_select(sql, values)
        for index in range(0, len(result)-1):
            cleaned.append(result[index][0])

        # test if not in table
        if self.get_event_id() not in cleaned:
            # add to tuple table
            sql = "insert into sidequests.Todolist(Event_ID, User_ID, event_date, event_name, priority) values (%s, %s, %s, %s, %s)"
            values = (self.get_event_id(), self.get_user_id(), self.get_event_date(), self.get_event_name(), self.get_priority())
            connection.run_change(sql, values)
        else:
            # update tuple table
            sql = "update sidequests.Todolist set User_ID = %s, event_date = %s, event_name = %s, priority = %s where Event_ID = %s"
            values = (self.get_user_id(), self.get_event_date(), self.get_event_name(), self.get_priority(), self.get_event_id())
            connection.run_change(sql, values)
    
    def remove(self, user, pwd):
        # connect to the databse
        connection = Connection("localhost", user, pwd, "sidequests")

        # delete Pilot from Database
        sql = "delete from todolist where event_ID = %s"
        values = (self.get_event_id(),)
        result = connection.run_change(sql, values)

    def load(self, user_id, event_id, user, pwd):
        # connect to the databse
        connection = Connection("localhost", user, pwd, "sidequests")

        # get the values for the given ID
        sql = "select * from Todolist where event_ID = %s and User_ID = %s"
        values = (event_id, user_id)
        result = connection.run_select(sql, values)

        # Set all values grabbed from the database
        self.set_event_id(result[0][0])
        self.set_user_id(result[0][1])
        self.set_event_date(result[0][2])
        self.set_event_name(result[0][3])
        self.set_priority(result[0][4])
