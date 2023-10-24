/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET SQL_NOTES=0 */;
DROP TABLE IF EXISTS adonis_schema;
CREATE TABLE `adonis_schema` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `batch` int NOT NULL,
  `migration_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS adonis_schema_versions;
CREATE TABLE `adonis_schema_versions` (
  `version` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS users;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `age` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO adonis_schema(id,name,batch,migration_time) VALUES('1','\'database/migrations/1698175296313_users\'','1','\'2023-10-24 16:35:18\'');

INSERT INTO adonis_schema_versions(version) VALUES('2');
INSERT INTO users(id,created_at,updated_at,name,password,age) VALUES('1','\'2023-10-24 16:38:43\'','\'2023-10-24 16:38:43\'','\'Nick\'','\'123456\'','30'),('2','\'2023-10-24 17:00:30\'','\'2023-10-24 17:00:30\'','\'Shanks\'','\'123456\'','30'),('3','\'2023-10-24 17:01:41\'','\'2023-10-24 17:01:41\'','\'Kaido\'','\'123456\'','30');