# Online-website-resume
This is a website/resume as a result of taking the cloud resume challenge.
The project will involve some technologies all foucused around AWS. It will include a frontend, a backend, DNS, some play around with APIs and Databases, Testing in Python, wrapping all around with IaC and using CI/CD.

## HTML and CSS

The website has been already written as a part of a previous project I had. I tweaked a bit the site to make it look a bit better. For CSS I have used Bootstrap since I am not very creative let's say.


## Static Website

- Create a S3 bucket: unique name.
- Enable static website hosting
- Create a CloudFront Distribution
- Attach the CloudFront access policy to the bucket
- Create a domain in GoDaddy
- Create a hosted zone in Route53 and sync the nameservers on GoDaddy
- Adding domain resume.ovidevproject.cloud to CloudFront
- Creating a certificate with AWS ACM
- Created an A record in my Route53 hosted zone to point to the cloudfront distribution.


## Backend

Scope for this part is to create the backend for the site and a functionality: to display on the frontend how many people have accessed the site and store that number in a DynamoDB database.

- Created DynamoDB with a new table to store the views variable
- Created a Lambda function to use as API
- Set permissions for Lambda function to access DynamoDB
- Created a JS function to add viewer count on the frontend.