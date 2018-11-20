<?php

namespace App\Entities;
use App\Entities;   
use Doctrine\ORM\Mapping as ORM;

/**
 * Message
 *
 * @ORM\Table(name="message", indexes={@ORM\Index(name="IDX_B6BD307FC09618AD", columns={"id_sujet"}), @ORM\Index(name="IDX_B6BD307F50EAE44", columns={"id_utilisateur"})})
 * @ORM\Entity
 */
class Message
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id_mes", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="message_id_mes_seq", allocationSize=1, initialValue=1)
     */
    private $idMes;

    /**
     * @var string
     *
     * @ORM\Column(name="contenu", type="string", length=255, nullable=false)
     */
    private $contenu;

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
     * @var \Sujet
     *
     * @ORM\ManyToOne(targetEntity="Sujet")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_sujet", referencedColumnName="id_sujet")
     * })
     */
    private $idSujet;

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
     * Get idMes
     *
     * @return integer 
     */
    public function getIdMes()
    {
        return $this->idMes;
    }

    /**
     * Set contenu
     *
     * @param string $contenu
     * @return Message
     */
    public function setContenu($contenu)
    {
        $this->contenu = $contenu;
    
        return $this;
    }

    /**
     * Get contenu
     *
     * @return string 
     */
    public function getContenu()
    {
        return $this->contenu;
    }

    /**
     * Set score
     *
     * @param integer $score
     * @return Message
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
     * @return Message
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
     * Set idSujet
     *
     * @param \Sujet $idSujet
     * @return Message
     */
    public function setIdSujet(\Sujet $idSujet = null)
    {
        $this->idSujet = $idSujet;
    
        return $this;
    }

    /**
     * Get idSujet
     *
     * @return \Sujet 
     */
    public function getIdSujet()
    {
        return $this->idSujet;
    }

    /**
     * Set idUtilisateur
     *
     * @param \Utilisateur $idUtilisateur
     * @return Message
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
}
