<html>
<head>
    <title>Contact us form</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    
    <style>
        * {
           background-color: #F3E0FF;
          }

        .content {
             background-color: #F3E0FF;
            }

    </style>

</head>
<body class="content">
    <div class="container">
        <h2>Contact Form</h2>
        <p> Send us a message!</p>

        <form action="form-process.php" method="POST">

            <div class="form-group">
                <label for="firstname">First Name</label>
                <input type="text" name="firstname" id="firstname" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="lastname">Last Name</label>
                <input type="text" name="lastname" id="lastname" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="tel" name="phone" id="phone" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <input type="text" name="message" id="message" class="form-control" required>
            </div>
            <div class="form-group">
                <br>

        <button class="btn btn-danger" type="reset">Reset</button>
        <button class="btn btn-success" type="submit">Submit</button>
        
    </div>

        </form>
    </div>
</body>

</html>