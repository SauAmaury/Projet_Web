<?php

require_once "./bootstrap.php";

$cgr = $entityManager->find('CarteGraphique',1);
 
echo ($cgr->getNom());