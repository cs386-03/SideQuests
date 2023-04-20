from connection import Connection

class Reward:


    def __init__(self, user_id, reward_type, points, acquisition):
        self.__user_id = user_id
        self.__reward_type = reward_type
        self.__points = points
        self.__acquisition = acquisition

    
    def set_user_id(self, user_id):
        self.__user_id = user_id

    def set_reward_type(self, reward_type):
        self.__reward_type = reward_type

    def set_points(self, points):
        self.__points = points

    def set_acquisition(self, acquisition):
        self.__acquisition = acquisition

    def get_user_id(self):
        return self.__user_id

    def get_reward_type(self):
        return self.__reward_type

    def get_points(self):
        return self.__points

    def get_acquisition(self):
        return self.__acquisition
    
    def save(self, user, pwd):
        connection = Connection("localhost", user, pwd, "sidequests")
        sql = "select user_id from Rewards;"
        values = ''
        result = connection.run_select(sql, value)
        for index in range(0, len(result)-1):
            cleaned.append(result[index][0])

        # test if not in table
        if self.get_user_id() not in cleaned:
            # add to tuple table
            sql = "insert into sidequests.Rewards(User_ID, reward_type, points, acquisition) values (%s, %s, %s, %s,)"
            values = (self.get_user_id(), self.get_reward_type(), self.get_points(), self.get_acquisition())
            connection.run_change(sql, values)
        else:
            # update tuple table
            sql = "update sidequests.Rewards set reward_type = %s, __points = %s, __acquisition = %s where User_ID = %s"
            values = (self.get_reward_type(), self.get_points(), self.get_acquisition(), self.get_user_id())
            connection.run_change(sql, values)
    
    def remove(self, user, pwd):
        # connect to the databse
        connection = Connection("localhost", user, pwd, "sidequests")

        # delete Reward from Database
        sql = "delete from Rewards where User_ID = %s"
        values = (self.get_user_id(),)
        result = connection.run_change(sql, values)

    def load(self, user_id, user, pwd):
        # connect to the databse
        connection = Connection("localhost", user, pwd, "sidequests")

        # get the values for the given ID
        sql = "select * from Rewards where User_ID = %s"
        values = (user_id,)
        result = connection.run_select(sql, values)

        # Set all values grabbed from the database
        self.set_user_id(result[0][0])
        self.set_reward_type(result[0][1])
        self.set_points(result[0][2])
        self.set_acquisition(result[0][3])