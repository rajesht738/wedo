<?php 
 namespace App\Controllers\Admin;
 use App\Controllers\BaseController;
class HomeController extends BaseController
{
    public function index()
    {
    echo view('admins/layout/header');
    echo  view('admins/dashboard');
    echo view('admins/layout/footer');
    }
}
