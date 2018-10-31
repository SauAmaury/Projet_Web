<?php

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

require_once "../vendor/autoload.php";

$isDevMode = true;
$config = Setup::createAnnotationMetadataConfiguration(array(__DIR__."/src"), $isDevMode);

$conn = array(
    'dbname' => 'postgres',
    'user' => 'postgres',
    'password' => 'simple',
    'host' => 'localhost',
    'driver' => 'pdo_pgsql',
);

$entityManager = EntityManager::create($conn, $config);