<?php 
 namespace App\Controllers\Admin;
 use App\Controllers\BaseController;
 use Config\Services;
class Login extends BaseController
{
    protected $helpers = ['form'];
    public function index()
    {
    echo view('admins/layout/header');
    echo  view('admins/login');
    echo view('admins/layout/footer');
    }
    public function authenticate()
    {
        $data = [];
        helper(['form']);
        if ($this->request->getMethod() == "post") {
            $validation =  \Config\Services::validation();
    
            $rules = [
                "username" => [
                    "label" => "Email", 
                    "rules" => "required|min_length[3]|max_length[10]"
                ],
                "password" => [
                    "label" => "Password", 
                    "rules" => "required|min_length[8]|max_length[20]"
                ],
                
            ];
    
            if ($this->validate($rules)) {
    
                // $user = new UserModel();
                // $userdata = [
                //     "firstname" => $this->request->getVar("firstname"),
                //     "lastname" => $this->request->getVar("lastname"),
                //     "email" => $this->request->getVar("email"),
                //     "password_confirm" => $this->request->getVar("password_confirm"),
                // ];
                // $user->save($userdata);
                $session = session();
                $session->setFlashData("success", "Successful Registration");
                return redirect()->to('admin/dashboard'); 
            } else {
                $data["validation"] = $validation->getErrors();
                return redirect()->to('admin/');
            }
        }
       
        
    }
}