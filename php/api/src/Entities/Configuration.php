<?php


namespace App\Entities;
use App\Entities;   
use Doctrine\ORM\Mapping as ORM;

/**
 * Configuration
 *
 * @ORM\Table(name="configuration", indexes={@ORM\Index(name="IDX_A5E2A5D71CA22767", columns={"id_cg"}), @ORM\Index(name="IDX_A5E2A5D7A0F09836", columns={"id_proc"}), @ORM\Index(name="IDX_A5E2A5D7A63EB3C", columns={"id_mem"})})
 * @ORM\Entity
 */
class Configuration
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id_configuration", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="configuration_id_configuration_seq", allocationSize=1, initialValue=1)
     */
    private $idConfiguration;

    /**
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=255, nullable=false)
     */
    private $nom;

    /**
     * @var \CarteGraphique
     *
     * @ORM\ManyToOne(targetEntity="CarteGraphique")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_cg", referencedColumnName="id_carte_graphique")
     * })
     */
    private $idCg;

    /**
     * @var \Processeur
     *
     * @ORM\ManyToOne(targetEntity="Processeur")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_proc", referencedColumnName="id_processeur")
     * })
     */
    private $idProc;

    /**
     * @var \Memoire
     *
     * @ORM\ManyToOne(targetEntity="Memoire")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_mem", referencedColumnName="id_memoire")
     * })
     */
    private $idMem;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Jeux", mappedBy="idConfiguration")
     */
    private $idJeux;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Utilisateur", mappedBy="idConfiguration", fetch="EAGER")
     */
    private $idUtilisateur;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->idJeux = new \Doctrine\Common\Collections\ArrayCollection();
        $this->idUtilisateur = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Get idConfiguration
     *
     * @return integer 
     */
    public function getIdConfiguration()
    {
        return $this->idConfiguration;
    }

    /**
     * Set nom
     *
     * @param string $nom
     * @return Configuration
     */
    public function setNom($nom)
    {
        $this->nom = $nom;
    
        return $this;
    }

    /**
     * Get nom
     *
     * @return string 
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * Set idCg
     *
     * @param \CarteGraphique $idCg
     * @return Configuration
     */
    public function setIdCg(\App\Entities\CarteGraphique $idCg = null)
    {
        $this->idCg = $idCg;
    
        return $this;
    }

    /**
     * Get idCg
     *
     * @return \CarteGraphique 
     */
    public function getIdCg()
    {
        return $this->idCg;
    }

    /**
     * Set idProc
     *
     * @param \Processeur $idProc
     * @return Configuration
     */
    public function setIdProc(\App\Entities\Processeur $idProc = null)
    {
        $this->idProc = $idProc;
    
        return $this;
    }

    /**
     * Get idProc
     *
     * @return \Processeur 
     */
    public function getIdProc()
    {
        return $this->idProc;
    }

    /**
     * Set idMem
     *
     * @param \Memoire $idMem
     * @return Configuration
     */
    public function setIdMem(\App\Entities\Memoire $idMem = null)
    {
        $this->idMem = $idMem;
    
        return $this;
    }

    /**
     * Get idMem
     *
     * @return \Memoire 
     */
    public function getIdMem()
    {
        return $this->idMem;
    }

    /**
     * Add idJeux
     *
     * @param \Jeux $idJeux
     * @return Configuration
     */
    public function addIdJeux(\App\Entities\Jeux $idJeux)
    {
        $this->idJeux[] = $idJeux;
    
        return $this;
    }

    /**
     * Remove idJeux
     *
     * @param \Jeux $idJeux
     */
    public function removeIdJeux(\App\Entities\Jeux $idJeux)
    {
        $this->idJeux->removeElement($idJeux);
    }

    /**
     * Get idJeux
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getIdJeux()
    {
        return $this->idJeux;
    }

    /**
     * Add idUtilisateur
     *
     * @param \Utilisateur $idUtilisateur
     * @return Configuration
     */
    public function addIdUtilisateur(\App\Entities\Utilisateur $idUtilisateur)
    {
        $this->idUtilisateur[] = $idUtilisateur;
    
        return $this;
    }

    /**
     * Remove idUtilisateur
     *
     * @param \Utilisateur $idUtilisateur
     */
    public function removeIdUtilisateur(\App\Entities\Utilisateur $idUtilisateur)
    {
        $this->idUtilisateur->removeElement($idUtilisateur);
    }

    /**
     * Get idUtilisateur
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getIdUtilisateur()
    {
        return $this->idUtilisateur;
    }
}
