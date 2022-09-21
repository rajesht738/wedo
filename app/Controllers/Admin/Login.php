<?php

namespace App\Controllers\Admin;

use App\Controllers\BaseController;
use Config\Services;
use config\Database;
use App\Models\AdminModel;

class Login extends BaseController
{
    protected $helpers = ['form'];
    public function index()
    {
        helper(['form']);
        echo view('admins/layout/header');
        echo  view('admins/login');
        echo view('admins/layout/footer');
    }
    public function authenticate()
    {
        $session = session();

        $model = new AdminModel();
        $username = $this->request->getVar('username');
        $password = md5($this->request->getVar('password'));
        $data = $model->where('email', $username)->first();

        
        // dd($data);
        if ($data) {
            $pass = $data['password'];
            if ($password == $pass) {
                $ses_data = [
                    'id'       => $data['id'],
                    'name'     => $data['name'],
                    'email'    => $data['email'],
                    'profileImage'=> $data['profileImage'],
                    'logged_in'     => TRUE
                ];
                $session->set($ses_data);
                return redirect()->to('/admin/dashboard');
            } else {
                $session->setFlashdata('msg', 'Wrong Password');
                return redirect()->to('/admin');
            }
        } else {
            $session->setFlashdata('msg', 'Email not Found');
            return redirect()->to('/admin');
        }
    }

    public function logout()
    {
        $session = session();
        $session->destroy();
        return redirect()->to('/admin');
    }
}
