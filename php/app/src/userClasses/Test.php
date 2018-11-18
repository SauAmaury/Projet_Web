<?php

//namespace App\Classes;

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
        $cgr = $this->em->find('CarteGraphique',1);
 
        echo ($cgr->getNom());
    }
}