<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once 'config/database.php';

try {
    $query = "SELECT * FROM consulta ORDER BY id DESC LIMIT 5";
    $stmt = $conn->prepare($query);
    $stmt->execute();

    $num = $stmt->rowCount();

    if ($num > 0) {
        $consultas_arr = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $consultas_arr[] = $row;
        }
        echo json_encode($consultas_arr);
    } else {
        echo json_encode(array("message" => "No se encontraron consultas."));
    }
} catch (PDOException $e) {
    echo json_encode(array("message" => "Error al obtener el historial de consultas.", "error" => $e->getMessage()));
}
?>
