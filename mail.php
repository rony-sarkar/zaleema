<?php
    function redirect_to($location){
        header('Location: '.$location); 
        exit;
    }
	if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$email=$_POST['email'];
		$subject=$_POST['subject'];
		$message=$_POST['message'];
        
		$to='ronysarkar132@gmail.com'; // add your mail here
        $subject="For intrest: ".$sub;
		$body = 'Name: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n" . 'Subject: ' . $subject . "\n\n" . 'Message: ' . $message;
		$email_from="From: ".$email;
        
		if(mail($to, $subject, $body, $email_from)){
            redirect_to('mail-success.html');
		}
		else{
			echo 'Something went wrong!';
		}
	}
?>