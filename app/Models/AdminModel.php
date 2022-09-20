<?php

namespace App\Models;

use CodeIgniter\Model;

class AdminModel extends Model
{
    /**
     * Called during initialization. Appends
     * our custom field to the module's model.
     */
    protected function getByUserame()
    {
        $this->db->where('username', $username);
        $admin = $this->db->get('wedo_adminmaster')->row-array();
        return $admin;
    }
}