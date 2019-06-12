# OVERVIEW
This is a helper script to upload to s3

# PRE-REQUISITE
- Have AWS Access Key
- Have AWS Secret Access Key

# ENV VARIABLES
- ACCESS_KEY_ID = AWS Access Key (*)
- SECRET_ACCESS_KEY = AWS Secret Access Key (*)
- REGION = AWS Region
- BUCKET = AWS S3 Bucket that you want to upload to (*)
- FOLDER = AWS S3 Folder path that you want to upload to (*)
- IS_PUBLIC = Publicity type of uploaded file. Default is false
- FILE_PATH = File path to your local file that you want to upload

(*) = Mandatory

# HOW TO RUN
- You have 2 options for your file source that you want to upload, either urls or local path
- If you choose urls, you need to edit `fileUrls` in index.js. This is an array of **object**, that at least needs to contain field `url`. If for each file you want to customise its name, specify field `name`. Otherwise, it will use default naming (number, start from 0)
- If you choose local path, then you need to specify environment variable `FILE_PATH`. This path starts from the root of this repo
- Run the program with this command `{SPECIFY ALL ENVIRONEMNT VARIABLE HERE} node index.js`
- See the result on **result.txt**

