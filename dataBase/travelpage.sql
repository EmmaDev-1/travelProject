CREATE DATABASE  IF NOT EXISTS `travelpage` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `travelpage`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: travelpage
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `consulta`
--

DROP TABLE IF EXISTS `consulta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consulta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pais` varchar(45) NOT NULL,
  `ciudad` varchar(45) NOT NULL,
  `presupuesto` decimal(10,2) NOT NULL,
  `clima` varchar(45) NOT NULL,
  `moneda_local` varchar(45) NOT NULL,
  `simbolo_moneda` varchar(45) NOT NULL,
  `presupuesto_convertido` varchar(45) NOT NULL,
  `tasa_cambio` decimal(10,6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consulta`
--

LOCK TABLES `consulta` WRITE;
/*!40000 ALTER TABLE `consulta` DISABLE KEYS */;
INSERT INTO `consulta` VALUES (1,'Japón','Tokio',1000000.00,'25','Yen','¥','750000',0.750000),(2,'Inglaterra','Londres',100.00,'15.9','GBP','£','0.01908',0.000191),(3,'Japón','Osaka',100.00,'22.45','JPY','¥','3.823',0.038230),(4,'Inglaterra','Londres',100.00,'14.22','GBP','£','0.01908',0.000191),(5,'Japón','Tokio',100.00,'22.58','JPY','¥','3.823',0.038230),(6,'India','Bombay',100.00,'26.99','INR','₹','2.017',0.020170),(7,'Dinamarca','Copenhague',100.00,'12.61','DKK','kr','0.1684',0.001684),(8,'Dinamarca','Aarhus',100.00,'10.98','DKK','kr','0.1684',0.001684),(9,'Inglaterra','Manchester',100.00,'14.9','GBP','£','0.01908',0.000191),(10,'Inglaterra','Manchester',100.00,'14.9','GBP','£','0.01908',0.000191),(11,'India','Agra',100.00,'30.92','INR','₹','2.017',0.020170),(12,'Japón','Tokio',100.00,'23.06','JPY','¥','3.823',0.038230),(13,'Japón','Tokio',100.00,'23.06','JPY','¥','3.823',0.038230),(14,'Inglaterra','Londres',100.00,'13.62','GBP','£','0.01908',0.000191),(15,'Japón','Tokio',100.00,'23.15','JPY','¥','3.823',0.038230),(16,'Inglaterra','Manchester',100.00,'14.22','GBP','£','0.01908',0.000191),(17,'Dinamarca','Aarhus',10000.00,'10.46','DKK','kr','16.84',0.001684),(18,'Inglaterra','Londres',1000.00,'11.36','GBP','£','0.18984',0.000190),(19,'Inglaterra','Londres',1000.00,'11.37','GBP','£','0.18984',0.000190),(20,'Inglaterra','Londres',1000.00,'11.37','GBP','£','0.18984',0.000190),(21,'Inglaterra','Londres',1000.00,'11.37','GBP','£','0.18984',0.000190),(22,'Inglaterra','Londres',1000.00,'11.37','GBP','£','0.18984',0.000190),(23,'Inglaterra','Londres',1000.00,'11.37','GBP','£','0.18984',0.000190),(24,'Inglaterra','Londres',1000.00,'11.37','GBP','£','0.18984',0.000190),(25,'Inglaterra','Londres',1000.00,'11.37','GBP','£','0.18984',0.000190),(26,'Inglaterra','Londres',1000.00,'11.37','GBP','£','0.18984',0.000190),(27,'Inglaterra','Londres',1000.00,'11.37','GBP','£','0.18984',0.000190),(28,'Inglaterra','Londres',1000.00,'11.37','GBP','£','0.18984',0.000190),(29,'Inglaterra','Londres',1000.00,'11.17','GBP','£','0.18984',0.000190),(30,'Inglaterra','Londres',1000.00,'11.17','GBP','£','0.18984',0.000190),(31,'Inglaterra','Londres',1000.00,'11.17','GBP','£','0.18984',0.000190),(32,'Inglaterra','Londres',1000.00,'11.17','GBP','£','0.18984',0.000190),(33,'Inglaterra','Londres',1000.00,'11.17','GBP','£','0.18984',0.000190),(34,'Inglaterra','Londres',1000.00,'11.17','GBP','£','0.18984',0.000190),(35,'Inglaterra','Londres',1000.00,'11.17','GBP','£','0.18984',0.000190),(36,'Inglaterra','Londres',1000.00,'11.17','GBP','£','0.18984',0.000190),(37,'Inglaterra','Manchester',100.00,'11.69','GBP','£','0.018984',0.000190),(38,'Inglaterra','Manchester',100.00,'11.69','GBP','£','0.018984',0.000190),(39,'Dinamarca','Copenhague',100.00,'10.34','DKK','kr','0.1676',0.001676),(40,'Dinamarca','Copenhague',100.00,'10.34','DKK','kr','0.1676',0.001676),(41,'Inglaterra','Londres',1000.00,'11.17','GBP','£','0.18984',0.000190);
/*!40000 ALTER TABLE `consulta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-20  9:29:39
