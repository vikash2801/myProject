#Page1
>List of courses (GET)
https://udemyapi.onrender.com/courseDetail

>list of courses wrt course type (GET)
https://udemyapi.onrender.com/courseDetail/courseType/{{courseType}}
e.g
    courseType = Java, python, etc..

>list of courses wrt rating
https://udemyapi.onrender.com/courseDetail/rating/{{rating}}
e.g
    rating = 4, 3.5, etc..

#Page2
>list course wrt courseCategory
https://udemyapi.onrender.com/filter/{{courseCategory}}
e.g
    courseCategory = Development, Marketing, etc..

>filter course wrt courseType
https://udemyapi.onrender.com/filter/{{courseCategory}}?courseType=Java

>filter course wrt cost
https://udemyapi.onrender.com/filter/{{courseCategory}}?lcost=700&hcost=1500

>filter course wrt language
https://udemyapi.onrender.com/filter/{{courseCategory}}?lang=English

>sort the course from high cost to low cost(descending)
https://udemyapi.onrender.com/filter/{{courseCategory}}?lcost=700&hcost=1500&sort=-1

#Page3
>placeOrder call (POST)
https://udemyapi.onrender.com/placeOrder
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
https://udemyapi.onrender.com/orders

>list of orders wrt email (GET)
https://udemyapi.onrender.com/orders?email=mhanda124@gmail.com


