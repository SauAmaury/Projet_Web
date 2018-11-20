<?php

namespace App\Entities;
use App\Entities;   
use Doctrine\ORM\Mapping as ORM;

/**
 * Sujet
 *
 * @ORM\Table(name="sujet", indexes={@ORM\Index(name="IDX_2E13599D9FD395AA", columns={"id_conf"}), @ORM\Index(name="IDX_2E13599D50EAE44", columns={"id_utilisateur"}), @ORM\Index(name="IDX_2E13599DBC75A90F", columns={"id_jeux"})})
 * @ORM\Entity
 */
class Sujet
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id_sujet", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="sujet_id_sujet_seq", allocationSize=1, initialValue=1)
     */
    private $idSujet;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", length=255, nullable=false)
     */
    private $description;

    /**
     * @var integer
     *
     * @ORM\Column(name="score", type="integer", nullable=false)
     */
    private $score;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="date", nullable=false)
     */
    private $date;

    /**
     * @var \Configuration
     *
     * @ORM\ManyToOne(targetEntity="Configuration")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_conf", referencedColumnName="id_configuration")
     * })
     */
    private $idConf;

    /**
     * @var \Utilisateur
     *
     * @ORM\ManyToOne(targetEntity="Utilisateur")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_utilisateur", referencedColumnName="id_utilisateur")
     * })
     */
    private $idUtilisateur;

    /**
     * @var \Jeux
     *
     * @ORM\ManyToOne(targetEntity="Jeux")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_jeux", referencedColumnName="id_jeux")
     * })
     */
    private $idJeux;


    /**
     * Get idSujet
     *
     * @return integer 
     */
    public function getIdSujet()
    {
        return $this->idSujet;
    }

    /**
     * Set description
     *
     * @param string $description
     * @return Sujet
     */
    public function setDescription($description)
    {
        $this->description = $description;
    
        return $this;
    }

    /**
     * Get description
     *
     * @return string 
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set score
     *
     * @param integer $score
     * @return Sujet
     */
    public function setScore($score)
    {
        $this->score = $score;
    
        return $this;
    }

    /**
     * Get score
     *
     * @return integer 
     */
    public function getScore()
    {
        return $this->score;
    }

    /**
     * Set date
     *
     * @param \DateTime $date
     * @return Sujet
     */
    public function setDate($date)
    {
        $this->date = $date;
    
        return $this;
    }

    /**
     * Get date
     *
     * @return \DateTime 
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set idConf
     *
     * @param \Configuration $idConf
     * @return Sujet
     */
    public function setIdConf(\Configuration $idConf = null)
    {
        $this->idConf = $idConf;
    
        return $this;
    }

    /**
     * Get idConf
     *
     * @return \Configuration 
     */
    public function getIdConf()
    {
        return $this->idConf;
    }

    /**
     * Set idUtilisateur
     *
     * @param \Utilisateur $idUtilisateur
     * @return Sujet
     */
    public function setIdUtilisateur(\Utilisateur $idUtilisateur = null)
    {
        $this->idUtilisateur = $idUtilisateur;
    
        return $this;
    }

    /**
     * Get idUtilisateur
     *
     * @return \Utilisateur 
     */
    public function getIdUtilisateur()
    {
        return $this->idUtilisateur;
    }

    /**
     * Set idJeux
     *
     * @param \Jeux $idJeux
     * @return Sujet
     */
    public function setIdJeux(\Jeux $idJeux = null)
    {
        $this->idJeux = $idJeux;
    
        return $this;
    }

    /**
     * Get idJeux
     *
     * @return \Jeux 
     */
    public function getIdJeux()
    {
        return $this->idJeux;
    }
}
