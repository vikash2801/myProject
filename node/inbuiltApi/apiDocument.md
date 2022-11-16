#Page1
>List of courses wrt courseId (GET)
http://localhost:9800/courseDetail/{{course_id}}

>list of courses wrt course type (GET)
http://localhost:9800/courseDetail/filter/courseType/{{courseType}}

>list of courses wrt course category

#Page2
>list courseType wrt courseCategory

>filter course wrt courseType

>filter course wrt duration

>filter course wrt language

>sort (ascending)


#Page3
>placeOrder call (POST)
http://localhost:9800/placeOrder
//Body
{
    "name":"Mehak",
    "email":"mhanda124@gmail.com",
    "address":"Bno 23,Sector 4,East Delhi",
    "phone":968760086,
    "courseItem":[1,5],
    "status": "Pending"
}

#Page4
>List of Orders (GET)
http://localhost:9800/orders

>list of orders wrt email (GET)
http://localhost:9800/orders?email=mhanda124@gmail.com
