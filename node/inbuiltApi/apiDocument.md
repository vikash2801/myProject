#Page1
>List of courses (GET)
https://udemyapi.onrender.com/courseDetail

>list of courses wrt course type (GET)
https://udemyapi.onrender.com/courseDetail/courseType/:courseTopic
e.g
    courseTopic = 1 , 3 , 4 etc.

>list the details of specific course (GET)
https://udemyapi.onrender.com/courseDetail/:courseId
e.g
courseId = 10403

>List studentCourse wrt reviewCount (GET)
https://udemyapi.onrender.com/courseDetail/studentCourse/:count
e.g
count = 5000



#Page2

>get category details (GET)
https://udemyapi.onrender.com/categoryJson

>list course wrt courseCategory (GET)
https://udemyapi.onrender.com/courseDetail/courseCat/:courseCategory
e.g
    courseCategory = Development, Marketing, etc..

>filter course wrt cost (GET)
https://udemyapi.onrender.com/courseDetail/courseCat/:courseCategory?lcost=700&hcost=1500

>filter course wrt rating (GET)
https://udemyapi.onrender.com/courseDetail/courseCat/:courseCategory?rating=3.5

>sort the course from high cost to low cost(descending) (GET)
https://udemyapi.onrender.com/courseDetail/courseCat/:courseCategory?lcost=700&hcost=1500&sort=-1



#Page3

>get course details of given courseIDs (POST)
https://udemyapi.onrender.com/courseItem
//Body
{
    "id": [10403,10584]
}

>place the Order for added course items in cart (POST)
https://udemyapi.onrender.com/placeOrder
//Body
{
    "name":"Mehak",
    "email":"mhanda124@gmail.com",
    "address":"Bno 23,Sector 4,East Delhi",
    "phone":968760086,
    "courseItem":[10403,10584],
    "status": "Pending"
}

#Page4

>list the orders details (GET)
https://udemyapi.onrender.com/orders

>list of orders wrt email (GET)
https://udemyapi.onrender.com/orders?email=mhanda124@gmail.com

>update the product status after payment
https://udemyapi.onrender.com/updateOrder/:id
e.g
id = 10403

>Delete the order from cart
https://udemyapi.onrender.com/deleteOrder/:id
e.g
id = 10403




