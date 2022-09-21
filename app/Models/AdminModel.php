<?php

namespace App\Models;

use CodeIgniter\Model;
use config\Database;

class AdminModel extends Model
{
    /**
     * Called during initialization. Appends
     * our custom field to the module's model.
     */
    protected $table = 'wedo_adminmaster';
    protected $allowedFields = ['username','password'];

    protected function getByUserame()
    {
        $db = Database::connect();
        $query = $db->query('SELECT * FROM wedo_adminmaster');

        foreach ($query->getResult('wedo_adminmaster') as $user) {
            echo $user->username; // access attributes
           
        }
    }
}
