<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index()
    {
        echo view('front/layout/header');
        echo  view('front/index');
        echo view('front/layout/footer');
    }
}
