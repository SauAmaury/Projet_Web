<?php

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

require_once "../vendor/autoload.php";

$isDevMode = true;
$config = Setup::createAnnotationMetadataConfiguration(array(__DIR__."/src"), $isDevMode, null, null, false);

$conn = array(
    'dbname' => 'postgres',
    'user' => 'postgres',
    'password' => 'simple',
    'host' => 'db',
    'driver' => 'pdo_pgsql',
);

$entityManager = EntityManager::create($conn, $config);