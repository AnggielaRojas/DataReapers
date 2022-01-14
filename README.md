# Visualuzation for fetal deaths: 
For this proejct we got our data source from https://wonder.cdc.gov/controller/datarequest/D133;jsessionid=597E1183D3658A174B2B660B9B7C . Cleaning the  allowed us to compare various contributions to fetal deaths. This data set gave us acces to data from 2005-2019.
## Importance : 
The purspose of this project was to be able to demostrate skills in order to analyse, visualize and better understand our data. Our data provided a baseline to what factor contribute to the fetal deaths of the the past 14 years. This helps identify what issues we have with fetal deaths and  contributing factors. 
## Problem statement : 
Be able to use a database such as MongoDB, SQL,SQLite, in order to house our data and then visualize the data by comparing different categories. Be able to visualize the categories that contribute to fetal deaths.  
## Questions to answer : 
* Does mother’s age affect fetal death?
* What type of delivery place are fetal deaths more common?
* Is there a delivery method that is more dangerous to fetal outcomes?

# Program istallation : 
### Jupiter Notebook and Python:
Jupiter notebook is a web application that allows you to create and share live code. It allows you to also share visualizations, equations and text. Some of its uses include data cleaning and viewing, transformations, and statistical modeling. Jupiter supports Julia, Python, and R.

A basic level of knowledge of Jupyter notebook and Python was needed in order to complete this project. We did some basic things such as reading a csv. file, cleaning the file , making data frames, and using data frames to make graphs.

### Installing Juypter notebook

There are different ways you can install Jupiter notebook, We can use either mamba or conda. Installation with mamba: In you terminal or on your command line type:
<img width="606" alt="Screen Shot 2022-01-13 at 6 33 34 PM" src="https://user-images.githubusercontent.com/89117449/149425356-d30043be-5a84-45a1-808b-4407a146b03e.png">



Installation using conda: In your terminal of command line type:

<img width="660" alt="Screen Shot 2022-01-13 at 7 32 53 PM" src="https://user-images.githubusercontent.com/89117449/149430690-7fe669f8-80a0-4044-a997-3b6a16dfde03.png">

Run Jupyter Notebook Just run the following in your terminal or command line
! 
<img width="602" alt="Screen Shot 2022-01-13 at 6 33 58 PM" src="https://user-images.githubusercontent.com/89117449/149425392-7e461d51-e4fd-428e-9341-d6195f7a5502.png">

If you are unable to install Jupyter notebook :

Jupyter allows you to try Jupyter Notebook on your browser!
# Data Source 
For our dataset we used the CDC  and pulled the following fields for the years 2005-2019 : 
- Age of Mother - Line graph 
- Delivery state - Bar graph
- Delivery method - Lollipop chart 
### Data manipulation : 
 The following include snipppets of how we cleanned and analyzed the data  
### Reading/ Data frame :<img width="876" alt="Screen Shot 2022-01-13 at 6 44 08 PM" src="https://user-images.githubusercontent.com/89117449/149426328-6a70133e-d3f6-4b80-a5ce-0dc7c71ed797.png">

### Cleaning : 
<img width="875" alt="Screen Shot 2022-01-13 at 6 55 01 PM" src="https://user-images.githubusercontent.com/89117449/149427304-43a66d89-fd7a-4fd7-aee9-92ab8ca8074d.png">
 
<img width="856" alt="Screen Shot 2022-01-13 at 6 55 15 PM" src="https://user-images.githubusercontent.com/89117449/149427327-55b0c1c5-b81d-4c55-95d3-5d2cedfee787.png">

# Database : 
## Postgres : 
PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.  

The database that we used was Postgres . The fetal_db file was  created in Postgres prior to running the jupyter notebook. When establishing connection to the database in the app.py file, we updates the connection to reflect correct username and password of the users system. A primary key was assigned to the table for the automap_base to work.<img width="880" alt="Screen Shot 2022-01-13 at 7 18 15 PM" src="https://user-images.githubusercontent.com/89117449/149429493-2894e24c-68de-4453-bfaf-a5e18f0b6db6.png">

The url to get the data from is "/api/fetal_data"

The names of the variables to call are the same as in the jupyter notebook file, but also in the app.py

<img width="876" alt="Screen Shot 2022-01-13 at 7 19 39 PM" src="https://user-images.githubusercontent.com/89117449/149429626-2b2bb315-89c5-4883-a400-36448865dbf2.png">

# Findings: 

