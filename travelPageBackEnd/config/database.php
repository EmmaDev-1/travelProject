<?php
$host = "localhost";
$db_name = "travelpage";
$username = "root"; // Cambia 'root' si tu usuario de MySQL es diferente
$password = "Admin1234!"; // Cambia si tienes una contraseña para MySQL

try {
    $conn = new PDO("mysql:host=" . $host . ";dbname=" . $db_name, $username, $password);
    $conn->exec("set names utf8");
} catch(PDOException $exception) {
    echo "Error de conexión: " . $exception->getMessage();
}
?>
