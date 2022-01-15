# Visualization for fetal deaths: 

For this project we got our data source from https://wonder.cdc.gov/controller/datarequest/D133;jsessionid=597E1183D3658A174B2B660B9B7C . Cleaning the  allowed us to compare various contributions to fetal deaths. This data set gave us acces to data from 2005-2019.

## Importance : 
The purpose of this project was to be able to demostrate skills in order to analyse, visualize and better understand our data. Our data provided a baseline to fetal deaths over the past 14 years. This helps us identify contributing factors to fetal deaths 
## Problem statement : 
* Be able to use a database such as MongoDB, SQL,SQLite, in order to house our data and then visualize the data by comparing different categories. 
* Be able to visualize the categories that contribute to fetal deaths.  
## Questions to answer : 
* What are the states with the highest fetal deaths?
* What is the impact of a mother's race/hispanic origin?
* Is there a delivery method that is more dangerous to fetal outcomes?

# Installation and database : 
## Postgres : 
PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.  
### Installing Postgres : 
* Go to the download page of PostgreSQL installers on the EnterpriseDB. https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
* Download installer for your respective operating system
* Once the installation is complete:
* Mac users will find a folder in their Applications named ‘PostgreSQL 13’.
* Windows users will be able to access the same files by clicking the start menu and scrolling to the ‘PostgreSQL 13’ folder

## Our database : 
The database that we used was Postgres . The fetal_db file was  created in Postgres prior to running the jupyter notebook. When establishing connection to the database in the app.py file, we updates the connection to reflect correct username and password of the users system. A primary key was assigned to the table for the automap_base to work.<img width="880" alt="Screen Shot 2022-01-13 at 7 18 15 PM" src="https://user-images.githubusercontent.com/89117449/149429493-2894e24c-68de-4453-bfaf-a5e18f0b6db6.png">

The url to get the data from is "/api/fetal_data"

The names of the variables to call are the same as in the jupyter notebook file, but also in the app.py

<img width="876" alt="Screen Shot 2022-01-13 at 7 19 39 PM" src="https://user-images.githubusercontent.com/89117449/149429626-2b2bb315-89c5-4883-a400-36448865dbf2.png">

## Jupiter Notebook and Python:
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
- state of residence - Line graph
- Race/Hispanic origin - Pie graph
- Delivery method - Bar chart 
# Data manipulation : 
 The following include snipppets of how we cleanned and analyzed the data  
### Reading/ Data frame :<img width="876" alt="Screen Shot 2022-01-13 at 6 44 08 PM" src="https://user-images.githubusercontent.com/89117449/149426328-6a70133e-d3f6-4b80-a5ce-0dc7c71ed797.png">



### Cleaning : 
<img width="875" alt="Screen Shot 2022-01-13 at 6 55 01 PM" src="https://user-images.githubusercontent.com/89117449/149427304-43a66d89-fd7a-4fd7-aee9-92ab8ca8074d.png">
 
<img width="856" alt="Screen Shot 2022-01-13 at 6 55 15 PM" src="https://user-images.githubusercontent.com/89117449/149427327-55b0c1c5-b81d-4c55-95d3-5d2cedfee787.png">

# Data Visualization 

## Bar graph 
* The following inlcudes snipets of our bar graph 
* The bar graphs compares Fetal deaths to Delivery methods such as Vaginal and Caesarean
<img width="469" alt="Screen Shot 2022-01-13 at 10 37 31 PM" src="https://user-images.githubusercontent.com/89117449/149447428-b89541c2-a539-4939-9411-af3ccf002734.png">

### Our code : 
<img width="472" alt="Screen Shot 2022-01-13 at 10 59 48 PM" src="https://user-images.githubusercontent.com/89117449/149449301-3c1c7a54-8100-480d-8792-89d6fa9fab49.png">

## Pie graph 

* The following inlcudes snipets of our bar graph 
* The bar graphs compares Fetal deaths to Race/Hispanic origin
<img width="396" alt="Screen Shot 2022-01-13 at 10 37 42 PM" src="https://user-images.githubusercontent.com/89117449/149447442-77d913d5-b232-4da6-b9e1-2e17c5a06157.png">

### Our code : 

<img width="692" alt="Screen Shot 2022-01-13 at 11 01 16 PM" src="https://user-images.githubusercontent.com/89117449/149449410-96cbb3bb-f056-4bef-884a-3cf085320efe.png">

## Line graph 

<img width="521" alt="Screen Shot 2022-01-14 at 11 51 11 PM" src="https://user-images.githubusercontent.com/89117449/149609417-d44af71d-cc1f-44d2-b518-c8085e5cfcda.png">

### Our code : 

<img width="352" alt="Screen Shot 2022-01-14 at 11 52 58 PM" src="https://user-images.githubusercontent.com/89117449/149609485-8d733f21-adef-45bb-a90d-2d81fd246497.png">


# Findings: 

## Delivery method vs fetal deaths 
* Vaginal fetal death accounted for :
* Cesarean fetal death accounted for :
* Not stated  fetal death accounted for :
* Not reported fetal death accounted for : 
 
 Based on the bar graph we can see there is an increase of fetal deaths if the method of delivery is a Vaginal delivery.
 
## Race/ Hispanic Origin vs fetal deaths
* Non- Hispanic White accounted for 44.3 % of fetal deaths.
* Non-Hispanic Black accounted for 26.5%  of fetal deaths. 
* Mexican accounted for 11.7 % of fetal deaths. 
* All other accounted for 17.5% of fetal deaths 

## State vs Fetal deaths 
* The state with the highest percentage of fetal deaths is Wyoming followed by West virginia, and Virginia.
* The state with the lowest percentage of fetal deaths is Alabama.
