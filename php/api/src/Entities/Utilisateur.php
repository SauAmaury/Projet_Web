<?php


namespace App\Entities;
use App\Entities;   
use Doctrine\ORM\Mapping as ORM;

/**
 * Utilisateur
 *
 * @ORM\Table(name="utilisateur")
 * @ORM\Entity
 */
class Utilisateur
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id_utilisateur", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="utilisateur_id_utilisateur_seq", allocationSize=1, initialValue=2)
     */
    private $idUtilisateur;

    /**
     * @var string
     *
     * @ORM\Column(name="mail", type="string", length=255, nullable=false)
     */
    private $mail;

    /**
     * @var string
     *
     * @ORM\Column(name="mdp", type="string", length=255, nullable=false)
     */
    private $mdp;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Configuration", inversedBy="idUtilisateur")
     * @ORM\JoinTable(name="utilisateur_configuration",
     *   joinColumns={
     *     @ORM\JoinColumn(name="id_utilisateur", referencedColumnName="id_utilisateur")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="id_configuration", referencedColumnName="id_configuration")
     *   }
     * )
     */
    private $idConfiguration;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->idConfiguration = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Get idUtilisateur
     *
     * @return integer 
     */
    public function getIdUtilisateur()
    {
        return $this->idUtilisateur;
    }

    /**
     * Set mail
     *
     * @param string $mail
     * @return Utilisateur
     */
    public function setMail($mail)
    {
        $this->mail = $mail;
    
        return $this;
    }

    /**
     * Get mail
     *
     * @return string 
     */
    public function getMail()
    {
        return $this->mail;
    }

    /**
     * Set mdp
     *
     * @param string $mdp
     * @return Utilisateur
     */
    public function setMdp($mdp)
    {
        $this->mdp = $mdp;
    
        return $this;
    }

    /**
     * Get mdp
     *
     * @return string 
     */
    public function getMdp()
    {
        return $this->mdp;
    }

    /**
     * Add idConfiguration
     *
     * @param \Configuration $idConfiguration
     * @return Utilisateur
     */
    public function addIdConfiguration(\App\Entities\Configuration $idConfiguration)
    {
        $this->idConfiguration[] = $idConfiguration;
    
        return $this;
    }

    /**
     * Remove idConfiguration
     *
     * @param \Configuration $idConfiguration
     */
    public function removeIdConfiguration(\App\Entities\Configuration $idConfiguration)
    {
        $this->idConfiguration->removeElement($idConfiguration);
    }

    /**
     * Get idConfiguration
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getIdConfiguration()
    {
        return $this->idConfiguration;
    }
}
