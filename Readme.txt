APIs:
/posts 
/posts/byid/
/comments
/comments/

Before starting project these modules you have to download;
FOR BACKEND:
	express
	cors
	nodemon
	sql2
	sequelize
	sequelize-cli
	npm install -g sequelize-cli (if sequelize-cli not introduced to your terminal or cmd)

Here we are using INSOMNIA for manual api testing in place of POSTMAN api

"nodemon": "^3.0.1",

USER TABLE STRUCTURE FOR API TESTING
	{
			"User_Name":"kumail123",
			"FirstName":"Kumail",
			"LastName":"Abbas",
			"Gender":"male",
			"PhoneNo": "12345678901",
			"Email":"Kumailabbas46@gmail.com",
			"Password":"noice12N",
	}
POSTS TABLE STRUCTURE FOR API TESTING
{
  "Title":"New post number 1",
  "Description": "here is the description of the first post",
  "Price":34000
}


FOR FRONTEND:
install 
	axios
	react-router-dom
	formik	
	yup
	styled-components
