<?php

namespace App\userClasses;  
use Psr\Container\ContainerInterface;
use Doctrine\ORM\EntityManager;

class Profil
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

    public function List($request, $response, $args)
    {
        $param = $request->getParams();   
        $user = $this->em->getRepository("App\Entities\Utilisateur");
        $user = $user->findOneBy(["idUtilisateur" => $param["id"]]);
        $tab = $user->getIdConfiguration();

        $res = array();
        foreach($tab as $key => $value)
        {
            $res[$key] = array("id" => $value->getIdConfiguration(), "nom" => $value->getNom());
        }
        return $response->withJson($res); 
    }

    public function ListDevices($request, $response, $args)
    {
        $param = $request->getParams();
        $config = $this->em->getRepository("App\Entities\Configuration");
        $config = $config->findOneBy(["idConfiguration" => $param["idc"]]);
        $idproc = $config->getIdProc();
        $idcg = $config->getIdCg();
        $idmem = $config->getIdMem();

        $res = array();

        $res["proc"] = array("id" => $idproc->getIdProcesseur(), "nom" => $idproc->getNom());
        $res["cg"] = array("id" => $idcg->getIdCarteGraphique(), "nom" => $idcg->getNom());
        $res["mem"] = array("id" => $idmem->getIdMemoire(), "nom" => $idmem->getNom());

        return $response->withJson($res);
    }

    public function ListAllCg($request, $response, $args)
    {
        $cg = $this->em->getRepository("App\Entities\CarteGraphique");


        $tab = $cg->findAll();
        foreach($tab as $key => $value)
        {
            $res[$key] = array("id" => $value->getIdCarteGraphique(), "nom" => $value->getNom());
        }

        return $response->withJson($res); 
    }

    public function ListAllProc($request, $response, $args)
    {
        $pr = $this->em->getRepository("App\Entities\Processeur");

        $tab = $pr->findAll();
        foreach($tab as $key => $value)
        {
            $res[$key] = array("id" => $value->getIdProcesseur(), "nom" => $value->getNom());
        }

        return $response->withJson($res); 
    }

    public function ListAllMem($request, $response, $args)
    {
        $mem = $this->em->getRepository("App\Entities\Memoire");

        $tab = $mem->findAll();
        foreach($tab as $key => $value)
        {
            $res[$key] = array("id" => $value->getIdMemoire(), "nom" => $value->getNom());
        }

        return $response->withJson($res); 
    }

    public function addConf($request, $response, $args)
    {
        $param = $request->getParams();

        $cg = $this->em->getRepository("App\Entities\CarteGraphique")->findOneBy(["idCarteGraphique" => $param["idcg"]]);
        $proc = $this->em->getRepository("App\Entities\Processeur")->findOneBy(["idProcesseur" => $param["idproc"]]);
        $mem = $this->em->getRepository("App\Entities\Memoire")->findOneBy(["idMemoire" => $param["idmem"]]);
        $user = $this->em->getRepository("App\Entities\Utilisateur")->findOneBy(["idUtilisateur" => $param["iduser"]]);


        $config = new \App\Entities\Configuration;
        $config->setNom($param["nom"]);
        $config->setIdCg($cg);
        $config->setIdProc($proc);
        $config->setIdMem($mem);
        $this->em->persist($config);

        $user->addIdConfiguration($config);
        $this->em->persist($user);
        
        $this->em->flush();
        return $response->withJson("ok"); 
    }

    public function modifConf($request, $response, $args)
    {
        $param = $request->getParams();
        $cg = $this->em->getRepository("App\Entities\CarteGraphique")->findOneBy(["idCarteGraphique" => $param["idcg"]]);
        $proc = $this->em->getRepository("App\Entities\Processeur")->findOneBy(["idProcesseur" => $param["idproc"]]);
        $mem = $this->em->getRepository("App\Entities\Memoire")->findOneBy(["idMemoire" => $param["idmem"]]);
        
        $config = $this->em->getRepository("App\Entities\Configuration");
        $config = $config->findOneBy(["idConfiguration" => $param["idc"]]);

        $config->setNom($param["nom"]);
        $config->setIdCg($cg);
        $config->setIdProc($proc);
        $config->setIdMem($mem);

        $this->em->persist($config);
        $this->em->flush();
        return $response->withJson("ok"); 
    }

    public function deleteConf($request, $response, $args)
    {
        $param = $request->getParams();
        $config = $this->em->getRepository("App\Entities\Configuration");
        $config = $config->findOneBy(["idConfiguration" => $param["idc"]]);

        $this->em->remove($config);
        $this->em->flush();
        return $response->withJson("ok"); 
    }


}