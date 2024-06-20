<?php

use PHPUnit\Framework\TestCase;

class ObtenerHistorialTest extends TestCase
{
    protected $db;

    protected function setUp(): void
    {
        // Establecer la conexión a la base de datos de prueba
        $this->db = new PDO('mysql:host=localhost;dbname=testdb', 'username', 'password');
        
        // Limpiar la tabla antes de cada prueba
        $this->db->exec("TRUNCATE TABLE consulta");
    }

    public function testObtenerHistorial()
    {
        // Incluir el archivo con la función a probar
        require_once __DIR__ . '/../obtenerHistorial.php';

        // Insertar datos de prueba
        $this->db->exec("INSERT INTO consulta (pais, ciudad, presupuesto, clima, moneda_local, simbolo_moneda, presupuesto_convertido, tasa_cambio)
                         VALUES ('España', 'Madrid', 1200.00, 'Nublado', 'EUR', '€', '1440.00 USD', 1.2)");

        // Llamar a la función obtenerHistorial
        $result = obtenerHistorial();

        // Validar que el historial contiene los datos insertados
        $this->assertIsArray($result);
        $this->assertCount(1, $result);
        $this->assertEquals('España', $result[0]['pais']);
        $this->assertEquals('Madrid', $result[0]['ciudad']);
        $this->assertEquals(1200.00, $result[0]['presupuesto']);
        $this->assertEquals('Nublado', $result[0]['clima']);
        $this->assertEquals('EUR', $result[0]['moneda_local']);
        $this->assertEquals('€', $result[0]['simbolo_moneda']);
        $this->assertEquals('1440.00 USD', $result[0]['presupuesto_convertido']);
        $this->assertEquals(1.2, $result[0]['tasa_cambio']);
    }
}
