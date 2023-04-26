#!/usr/bin/python

import cgi
import sys
sys.path.append("../Python")
from users import Users
from users import get_new_id

form - cgi.FieldStorage()
username = form.getvalue('username')
password = form.getvalue('password')

user_id = get_new_id(username, password);

new_user = Users(user_id, username, password, "name", "occupation", "0000-00-00", 0, 0)
new_user.save(username, password)
