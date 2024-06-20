<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once 'config/database.php';

$data = json_decode(file_get_contents("php://input"));

if (
    !empty($data->pais) &&
    !empty($data->ciudad) &&
    !empty($data->presupuesto) &&
    !empty($data->clima) &&
    !empty($data->moneda_local) &&
    !empty($data->simbolo_moneda) &&
    !empty($data->presupuesto_convertido) &&
    !empty($data->tasa_cambio)
) {
    $query = "INSERT INTO consulta SET 
              pais=:pais, ciudad=:ciudad, presupuesto=:presupuesto, clima=:clima, 
              moneda_local=:moneda_local, simbolo_moneda=:simbolo_moneda, 
              presupuesto_convertido=:presupuesto_convertido, tasa_cambio=:tasa_cambio";

    $stmt = $conn->prepare($query);

    $stmt->bindParam(":pais", $data->pais);
    $stmt->bindParam(":ciudad", $data->ciudad);
    $stmt->bindParam(":presupuesto", $data->presupuesto);
    $stmt->bindParam(":clima", $data->clima);
    $stmt->bindParam(":moneda_local", $data->moneda_local);
    $stmt->bindParam(":simbolo_moneda", $data->simbolo_moneda);
    $stmt->bindParam(":presupuesto_convertido", $data->presupuesto_convertido);
    $stmt->bindParam(":tasa_cambio", $data->tasa_cambio);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Consulta guardada exitosamente."]);
    } else {
        echo json_encode(["message" => "No se pudo guardar la consulta."]);
    }
} else {
    echo json_encode(["message" => "Datos incompletos."]);
}
?>
