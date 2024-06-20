<?php

use PHPUnit\Framework\TestCase;

class GuardarConsultaTest extends TestCase
{
    protected $db;

    protected function setUp(): void
    {
        // Establecer la conexión a la base de datos de prueba
        $this->db = new PDO('mysql:host=localhost;dbname=testdb', 'username', 'password');
        
        // Limpiar la tabla antes de cada prueba
        $this->db->exec("TRUNCATE TABLE consulta");
    }

    public function testGuardarConsulta()
    {
        // Incluir el archivo con la función a probar
        require_once __DIR__ . '/../guardarConsulta.php';

        // Datos de prueba
        $pais = 'México';
        $ciudad = 'Ciudad de México';
        $presupuesto = 1000.00;
        $clima = 'Soleado';
        $moneda_local = 'MXN';
        $simbolo_moneda = '$';
        $presupuesto_convertido = '50.00 USD';
        $tasa_cambio = 0.05;

        // Llamar a la función guardarConsulta
        guardarConsulta($pais, $ciudad, $presupuesto, $clima, $moneda_local, $simbolo_moneda, $presupuesto_convertido, $tasa_cambio);

        // Verificar la inserción en la base de datos
        $stmt = $this->db->query("SELECT * FROM consulta WHERE pais = 'México' AND ciudad = 'Ciudad de México'");
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        // Validar los resultados
        $this->assertNotEmpty($result);
        $this->assertEquals($pais, $result['pais']);
        $this->assertEquals($ciudad, $result['ciudad']);
        $this->assertEquals($presupuesto, $result['presupuesto']);
        $this->assertEquals($clima, $result['clima']);
        $this->assertEquals($moneda_local, $result['moneda_local']);
        $this->assertEquals($simbolo_moneda, $result['simbolo_moneda']);
        $this->assertEquals($presupuesto_convertido, $result['presupuesto_convertido']);
        $this->assertEquals($tasa_cambio, $result['tasa_cambio']);
    }
}
