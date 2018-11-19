<?php

namespace App\userClasses;  
use Doctrine\ORM\EntityManager;

class Test
{
    /**
     * @var EntityManager
     */
    private $em;

    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }

    public function show()
    {
        $cgr = $this->em->find('App\Entities\CarteGraphique',1);
 
        echo ($cgr->getNom());
    }
}