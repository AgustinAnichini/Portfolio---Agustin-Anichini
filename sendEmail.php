<?php
include_once ("third-party/PHPMailer-master/src/PHPMailer.php");
include_once ("third-party/PHPMailer-master/src/SMTP.php");
include_once ("third-party/PHPMailer-master/src/Exception.php");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = filter_var(trim($_POST['phone']), FILTER_SANITIZE_STRING);
    $agenda = filter_var(trim($_POST['agenda']), FILTER_SANITIZE_STRING);
    $consulta = filter_var(trim($_POST['consulta']), FILTER_SANITIZE_STRING);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Correo electrónico no válido.";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';  
        $mail->SMTPAuth = true;
        $mail->Username = 'agustinanichini277@gmail.com'; 
        $mail->Password = 'okmmaeerwqyghuxs'; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom('agustinanichini277@gmail.com', 'Agustin Anichini');
        $mail->addAddress($email); 

        $mail->isHTML(false);
        $mail->Subject = 'Propuesta laboral del formulario de contacto';
        $mail->Body    = "Nombre: $name\nEmail: $email\nTeléfono: $phone\nAgendar como: $agenda\nConsulta: $consulta";

        $mail->send();
        echo 'Correo enviado con éxito.';
    } catch (Exception $e) {
        echo "Hubo un error al enviar el correo: {$mail->ErrorInfo}";
    }
} else {
    echo "Solicitud inválida.";
}
