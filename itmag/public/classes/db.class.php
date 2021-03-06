<?php
class Database
{
    private $serverName;
    private $userName;
    private $userPw;
    private $db;

    public function __construct($ServerName, $UserName, $UserPw, $Db)
    {
        $this->serverName = $ServerName;
        $this->userName = $UserName;
        $this->userPw = $UserPw;
        $this->db = $Db;
    }

    public function connect()
    {
        $dbConnection = new mysqli($this->serverName, $this->userName, $this->userPw, $this->db);

        if (!$dbConnection) {
            die(mysqli_errno($dbConnection) . " : " . mysqli_error($dbConnection));
        } else {
            return $dbConnection;
        }
    }
}

$db = new Database("localhost", "root", "", "itmag");
$dbConn = $db->connect();