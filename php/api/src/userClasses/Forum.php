<?php

namespace App\userClasses;  
use Psr\Container\ContainerInterface;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Query\ResultSetMapping;

class Forum
{
    /**
     * @var EntityManager
     */
    private $em;
    protected $container;

    public function __construct(EntityManager $em,ContainerInterface $container)
    {
        $this->em = $em;
        $this->container = $container;
    }


    public function ListSujet($request, $response, $args)
    {
        $sujet = $this->em->getRepository("App\Entities\Sujet");

        $tab = $sujet->findBy(array(), array('score' => 'desc'));
        foreach($tab as $key => $value)
        {
            $res[$key] = array("id" => $value->getIdSujet(), "cont" => $value->getDescription(), "score" => $value->getScore());
        }
        return $response->withJson($res); 
    }

    public function changeNote($request, $response, $args)
    {
        $param = $request->getParams();

        $sujet = $this->em->getRepository("App\Entities\Sujet");
        $sujet = $sujet->findOneBy(array("idSujet" => $param["id"]));

        if($param["updw"] == "u")
        {
            $sujet->setScore($sujet->getScore()+1);
        }else if($param["updw"] == "d"){
            $sujet->setScore($sujet->getScore()-1);
        }

        $this->em->persist($sujet);
        $this->em->flush();

        return $response->withJson("ok"); 
    }

    public function ListSujetMessages($request, $response, $args)
    {
        $param = $request->getParams();
        $mess = $this->em->getRepository("App\Entities\Message");
        $tab = $mess->findBy(array("idSujet" => $param["id"]), array('score' => 'desc'));
        
        $res = array();
        foreach($tab as $key => $value)
        {
            $res[$key] = array("id" => $value->getIdMes(), "cont" => $value->getContenu(), "score" => $value->getScore());
        }
        return $response->withJson($res); 
    }



}
