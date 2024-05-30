# Wefunder Investment Form

This project provides a template for companies to collect basic user data (name and email) and redirect to their Wefunder investment page.

## Setup Instructions

### 1. Clone the Repository
First, clone the repository to your local machine:
```bash
git clone https://github.com/your-username/wefunder-investment-form.git
cd wefunder-investment-form
```

2. Install Dependencies
Install the necessary dependencies using npm:
```bash
npm install
```

3. Customize the Wefunder URL
Open public/index.html and locate the hidden input field with id="wefunderUrl". Replace the value attribute with your specific Wefunder URL:
```html
<input type="hidden" id="wefunderUrl" name="wefunderUrl" value="https://wefunder.com/your-company">
```

4. Add Custom Styles (Optional)
To override the default styles with your own custom styles, create a custom-styles.css file in the public directory. Here you can add any custom CSS rules you want to apply.
Example public/custom-styles.css:
```css
body {
    background-color: #ffffff; /* Example of overriding the background color */
}

h1 {
    color: #ff5733; /* Example of overriding the heading color */
}

/* Add any other custom styles you need */
```

5. Run the Server
Start the server by running the following command:

```bash
node server.js
```
This will start the server on http://localhost:3000. You can now open your browser and navigate to this URL to see the form.

6. Deploy
To deploy the form on your website, you need to serve the public directory on your web server. Here’s a simple way to do it:
  1. Upload the contents of the public directory to your web server.
  2. Ensure your web server is configured to serve the index.html file.
Example File Structure:
```java
wefunder-investment-form/
├── public/
│   ├── index.html
│   ├── script.js
│   ├── default-styles.css
│   ├── custom-styles.css (optional)
├── package.json
├── package-lock.json
├── server.js
├── README.md
├── .gitignore
.gitignore File
```
Your .gitignore file should include the following to avoid committing unnecessary files:
```kotlin
node_modules/
data.json
```

# To deploy the form on your website at www.mysite.com/invest, follow these steps:

Upload the Contents of the public Directory:

Use an FTP client or your hosting provider's file manager to upload the contents of the public directory to the desired directory on your web server. For example, upload the files to the www.mysite.com/invest directory.
Ensure Your Web Server is Configured Correctly:

Make sure your web server is configured to serve the index.html file when someone navigates to www.mysite.com/invest.
Example Steps Using cPanel (Common Web Hosting Control Panel)
Log in to cPanel:

Access your cPanel by going to www.mysite.com/cpanel and logging in with your credentials.
Navigate to the File Manager:

In the Files section, click on "File Manager."
Upload Files:

Navigate to the public_html directory or the root directory for your site.
Create a new folder named invest (if it doesn't already exist).
Open the invest folder and click on "Upload."
Upload all the files from the public directory on your local machine to this invest folder.
Verify the Deployment:

Open your browser and navigate to www.mysite.com/invest to ensure the form is displayed correctly.

# Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or suggestions.

# License
This project is licensed under the MIT License.
