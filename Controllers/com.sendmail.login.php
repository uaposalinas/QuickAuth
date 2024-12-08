<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require '../Vendor/Mail/PHPMailer.php';
    require '../Vendor/Mail/SMTP.php';
    require '../Vendor/Mail/Exception.php';

    $MailService = new PHPMailer(true);
    $MailService->CharSet = 'UTF-8';

    if(isset($_POST["AccountName"]) && isset($_POST["UserName"]) && isset($_POST["Mail"]) && isset($_POST["Token"])){

        $AccountName = $_POST["AccountName"];
        $ThisUserName = $_POST["UserName"];
        $Mail = $_POST["Mail"];
        $Token = $_POST["Token"];
        $Code = $_POST["Code"];


        try {

            $MailService->SMTPDebug = 0;                      
            $MailService->isSMTP();                                            
            $MailService->Host       = 'mail.devlabsco.space';                 
            $MailService->SMTPAuth   = true;                               
            $MailService->Username   = 'team@devlabsco.space';                    
            $MailService->Password   = 'Dv229011000$';                              
            $MailService->SMTPSecure = "ssl";           
            $MailService->Port       = 465;                                
        
            $MailService->setFrom('team@devlabsco.space', 'Inicio de sesión de Hello ID');
            $MailService->addAddress("$Mail", "$AccountName");    
     
        
            $MailService->isHTML(true);                                
            $MailService->Subject = 'Solicitud de Inicio de Sesión';
            $MailService->Body    = "
            
            <!doctype html>
            <html xmlns='http://www.w3.org/1999/xhtml' xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'>

            <head>
                <title>

                </title>
                <!--[if !mso]><!-- -->
                <meta http-equiv='X-UA-Compatible' content='IE=edge'>
                <!--<![endif]-->
                <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
                <meta name='viewport' content='width=device-width, initial-scale=1'>
                <style type='text/css'>
                    #outlook a {
                        padding: 0;
                    }

                    .ReadMsgBody {
                        width: 100%;
                    }

                    .ExternalClass {
                        width: 100%;
                    }

                    .ExternalClass * {
                        line-height: 100%;
                    }

                    body {
                        margin: 0;
                        padding: 0;
                        -webkit-text-size-adjust: 100%;
                        -ms-text-size-adjust: 100%;
                    }

                    table,
                    td {
                        border-collapse: collapse;
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                    }

                    img {
                        border: 0;
                        height: auto;
                        line-height: 100%;
                        outline: none;
                        text-decoration: none;
                        -ms-interpolation-mode: bicubic;
                    }

                    p {
                        display: block;
                        margin: 13px 0;
                    }
                </style>
                <!--[if !mso]><!-->
                <style type='text/css'>
                    @media only screen and (max-width:480px) {
                        @-ms-viewport {
                            width: 320px;
                        }
                        @viewport {
                            width: 320px;
                        }
                    }
                </style>
                <!--<![endif]-->
                <!--[if mso]>
                    <xml>
                    <o:OfficeDocumentSettings>
                    <o:AllowPNG/>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                    </xml>
                    <![endif]-->
                <!--[if lte mso 11]>
                    <style type='text/css'>
                    .outlook-group-fix { width:100% !important; }
                    </style>
                    <![endif]-->


                <style type='text/css'>
                    @media only screen and (min-width:480px) {
                        .mj-column-per-100 {
                            width: 100% !important;
                        }
                    }
                </style>


                <style type='text/css'>
                </style>

            </head>

            <body style='background-color:#f9f9f9;'>


                <div style='background-color:#f9f9f9;'>


                    <!--[if mso | IE]>
                <table
                    align='center' border='0' cellpadding='0' cellspacing='0' style='width:600px;' width='600'
                >
                    <tr>
                    <td style='line-height:0px;font-size:0px;mso-line-height-rule:exactly;'>
                <![endif]-->


                    <div style='background:#f9f9f9;background-color:#f9f9f9;Margin:0px auto;max-width:600px;'>

                        <table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#f9f9f9;background-color:#f9f9f9;width:100%;'>
                            <tbody>
                                <tr>
                                    <td style='border-bottom:#7668AF solid 5px;direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;'>
                                        <!--[if mso | IE]>
                            <table role='presentation' border='0' cellpadding='0' cellspacing='0'>
                            
                    <tr>
                
                    </tr>
                
                            </table>
                            <![endif]-->
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>


                    <!--[if mso | IE]>
                    </td>
                    </tr>
                </table>
                
                <table
                    align='center' border='0' cellpadding='0' cellspacing='0' style='width:600px;' width='600'
                >
                    <tr>
                    <td style='line-height:0px;font-size:0px;mso-line-height-rule:exactly;'>
                <![endif]-->


                    <div style='background:#fff;background-color:#fff;Margin:0px auto;max-width:600px;'>

                        <table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#fff;background-color:#fff;width:100%;'>
                            <tbody>
                                <tr>
                                    <td style='border:#dddddd solid 1px;border-top:0px;direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;'>
                                        <!--[if mso | IE]>
                            <table role='presentation' border='0' cellpadding='0' cellspacing='0'>
                            
                    <tr>
                
                        <td
                        style='vertical-align:bottom;width:600px;'
                        >
                    <![endif]-->

                                        <div class='mj-column-per-100 outlook-group-fix' style='font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;'>

                                            <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:bottom;' width='100%'>

                                                <tr>
                                                    <td align='center' style='font-size:0px;padding:10px 25px;word-break:break-word;'>

                                                        <table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:collapse;border-spacing:0px;'>
                                                            <tbody>
                                                                <tr>
                                                                    <td style='width:64px;'>

                                                                        <img alt='Hello ID Logo' height='auto' src='https://helloid.devlabsco.space/assets/images/logo.png' style='border:0;display:block;outline:none;text-decoration:none;width:100%;' width='64' />

                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td align='center' style='font-size:0px;padding:10px 25px;padding-bottom:40px;word-break:break-word;'>

                                                        <div style='font-family:Arial,sans-serif;font-size:32px;font-weight:bold;line-height:1;text-align:center;color:#555;'>
                                                            Hello ID
                                                        </div>

                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td align='center' style='font-size:0px;padding:10px 25px;padding-bottom:0;word-break:break-word;'>

                                                        <div style='font-family:Arial,sans-serif;font-size:16px;line-height:22px;text-align:center;color:#555;'>
                                                        </div>

                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td align='center' style='font-size:0px;padding:10px 25px;word-break:break-word;'>

                                                        <div style='font-family:sans-serif, Arial; font-weight: 400; font-size:20px;line-height:22px;text-align:center;-webkit-text-fill-color: transparent; -webkit-background-clip: text; background-clip: text; background-image: linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%);'>
                                                            Te damos la bienvenida, $AccountName
                                                        </div>

                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td align='center' style='font-size:0px;padding:10px 25px;padding-bottom:20px;word-break:break-word;'>

                                                        <div style='font-family:Arial,sans-serif;font-size:16px;line-height:22px;text-align:justify; margin-left:15px; margin-right:15px; color:#555;'>
                                                            Hemos detectado una solicitud para acceder a tu cuenta con el nombre de usuario @$ThisUserName utilizando la opción de autenticación por correo electrónico. Si fuiste tú quien realizó esta acción, puedes autorizar el inicio de sesión haciendo clic en el botón de abajo. En caso contrario, simplemente ignora este mensaje. Si sospechas de actividad inusual en tu cuenta, te recomendamos cambiar tu contraseña de inmediato para garantizar la seguridad de tu información.                                            </div>

                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td align='center' style='font-size:0px;padding:10px 25px;padding-top:30px;padding-bottom:40px;word-break:break-word;'>

                                                        <table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:separate;line-height:100%;'>
                                                            <tr>
                                                                <td align='center' bgcolor='transparent' role='presentation' style='border:none;border-radius:20px;color:#ffffff;cursor:auto;padding:15px 25px;' valign='middle' class='AuthButton' >
                                                                    <a href='https://helloid.devlabsco.space/access/login/service/Response/Mail?Token=$Token' 
                                                                    style='font-family: Franklin Gothic Medium, Arial Narrow, Arial, sans-serif; display: inline-block; background-color: #007BFF; color: #FFFFFF; text-decoration: none; padding: 20px 20px; font-size: 16px; border-radius: 5px;'>
                                                                    Autorizar
                                                                </a>
                                                                
                                                                </td>
                                                            </tr>
                                                        </table>

                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td align='center' style='font-size:0px;padding:10px 25px;padding-bottom:0;word-break:break-word;'>

                                                        <div style='font-family:Arial,sans-serif;font-size:16px;line-height:22px;text-align:center;color:#555;'>
                                                            Tambien puedes autorizar usando el sieguiente enlance:
                                                        </div>

                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td align='center' style='font-size:0px;padding:10px 25px;padding-bottom:40px;word-break:break-word;'>

                                                        <div style='font-family:Arial,sans-serif;font-size:16px;line-height:22px;text-align:center;color:#555;'>
                                                            <a href='https://helloid.devlabsco.space/access/login/service/Response/Mail?Token=$Token' style='color:#2F67F6'>https://helloid.devlabsco.space/access/login/service/Response/</a>
                                                        </div>

                                                    </td>
                                                </tr>

                                            

                                                <tr>
                                                    <td align='left' style='font-size:0px;padding:10px 25px;word-break:break-word;'>

                                                        <div style='font-family:Arial,sans-serif;font-size:14px;line-height:20px;text-align:left;color:#525252;'>
                                                            Enviado con amor, <br><br> Alejandro Salinas<br>DevLabs Corporation LLC Fundador & CEO<br>
                                                            <a href='mailto:support@devlabsco.space' style='color:#2F67F6'>support@devlabsco.space</a>
                                                        </div>

                                                    </td>
                                                </tr>

                                            </table>

                                        </div>

                                        <!--[if mso | IE]>
                        </td>
                    
                    </tr>
                
                            </table>
                            <![endif]-->
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>


                    <!--[if mso | IE]>
                    </td>
                    </tr>
                </table>
                
                <table
                    align='center' border='0' cellpadding='0' cellspacing='0' style='width:600px;' width='600'
                >
                    <tr>
                    <td style='line-height:0px;font-size:0px;mso-line-height-rule:exactly;'>
                <![endif]-->


                    <div style='Margin:0px auto;max-width:600px;'>

                        <table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'>
                            <tbody>
                                <tr>
                                    <td style='direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;'>
                                        <!--[if mso | IE]>
                            <table role='presentation' border='0' cellpadding='0' cellspacing='0'>
                            
                    <tr>
                
                        <td
                        style='vertical-align:bottom;width:600px;'
                        >
                    <![endif]-->

                    <div class='mj-column-per-100 outlook-group-fix' style='font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;'>

                        <table border='0' cellpadding='0' cellspacing='0' role='presentation' width='100%'>
                            <tbody>
                                <tr>
                                    <td style='vertical-align:bottom;padding:0;'>

                                        <table border='0' cellpadding='0' cellspacing='0' role='presentation' width='100%'>

                                            <tr>
                                                <td align='center' style='font-size:0px;padding:0;word-break:break-word;'>

                                                    <div style='font-family: Arial,sans-serif;font-size:12px;font-weight:300;line-height:1;text-align:center;color:#575757;'>
                                                        © 2024 DevLabs Co LLC, Res. San Juan. San Pedro Sula, Cortés 21101, HN <br><br>Todos los derechos reservados.
                                                    </div>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td align='center' style='font-size:0px;padding:10px;word-break:break-word;'>

                                                    <div style='font-family: Arial,sans-serif;font-size:12px;font-weight:300;line-height:1;text-align:center;color:#575757;'>
                                                    </div>

                                                </td>
                                            </tr>

                                        </table>

                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                                        <!--[if mso | IE]>
                        </td>
                    
                    </tr>
                
                            </table>
                            <![endif]-->
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>


                    <!--[if mso | IE]>
                    </td>
                    </tr>
                </table>
                <![endif]-->


                </div>

            </body>

            </html>


            
            ";
        
            $MailService->send();

        } catch (Exception $e) {
            echo "false";
        }
    

    }else{

        echo "false";

    }

?>